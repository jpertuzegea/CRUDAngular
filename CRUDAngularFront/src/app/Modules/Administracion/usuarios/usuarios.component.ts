
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../Services/services.service';
import { error } from '@angular/compiler/src/util';
import { UsuarioDTO } from '../../../Models/UsuarioDTO';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  showModal = false;

  constructor(private formBuilder: FormBuilder, private Service: ServicesService) { }
  form: FormGroup;
  Accion = "Registro";

  Lista: UsuarioDTO[];


  ngOnInit(): void {

    this.ListarTodosUsuarios();

    this.form = this.formBuilder.group(
      {
        UsuarioId: '',
        Nombre: '',
        Apellido: '',
        Cedula: '',
        Telefono: '',
        Genero: ''
      }
    );
  }

  GuardarUsuario() {
    let Usuario = new UsuarioDTO();
    Usuario.UsuarioId = this.form.get("UsuarioId").value;
    Usuario.Nombre = this.form.get("Nombre").value;
    Usuario.Apellido = this.form.get("Apellido").value;
    Usuario.Cedula = this.form.get("Cedula").value;
    Usuario.Telefono = this.form.get("Telefono").value;
    Usuario.Genero = this.form.get("Genero").value;

    this.Service.SaveUser(Usuario).subscribe(
      Usuarios => {
        if (Usuarios) {
          alert("Usuario creado con exito");
          this.ListarTodosUsuarios();
          this.MostrarModal(false, "Registro");

          this.form.controls['UsuarioId'].setValue("");
          this.form.controls['Nombre'].setValue("");
          this.form.controls['Apellido'].setValue("");
          this.form.controls['Cedula'].setValue("");
          this.form.controls['Telefono'].setValue("");
          this.form.controls['Genero'].setValue("");

        } else {
          alert("Usuario NO creado con exito");
        }
      }, error => {
        alert(JSON.stringify(error));
      }
    );
  }

  ListarTodosUsuarios() {
    this.Service.GetAllUsers().subscribe(
      Usuarios => {
        this.Lista = Usuarios;
      }, error => {
        alert(JSON.stringify(error));
      }
    );
  }

  ModificarUsuario() {
    //this.Service.UpdateUser();
  }

  GetUserByUserId(id: number) {
    this.Service.GetUserByUserId(id).subscribe(
      Usuario => {
        alert(JSON.stringify(Usuario));
        let User = Usuario as UsuarioDTO;
        this.form.controls['UsuarioId'].setValue(User.UsuarioId);
        this.form.controls['Nombre'].setValue(User.Nombre);
        this.form.controls['Apellido'].setValue(User.Apellido);
        this.form.controls['Cedula'].setValue(User.Cedula);
        this.form.controls['Telefono'].setValue(User.Telefono);
        this.form.controls['Genero'].setValue(User.Genero); 
      }, error => {
        alert(JSON.stringify(error));
      }
    );
  }


  VerUsuario(id: number) {
    this.Accion = "Modificacion";
    this.MostrarModal(true, "Modificacion");
    this.GetUserByUserId(id);
  }


  MostrarModal(ver: boolean, Accion: string) {
    this.showModal = ver;
    this.Accion = Accion;
  }
}


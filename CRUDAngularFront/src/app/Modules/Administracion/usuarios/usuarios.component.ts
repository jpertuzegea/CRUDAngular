
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
          this.showModal = false;
           
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
    //this.Service.GetUserByUserId(id);
  }
}

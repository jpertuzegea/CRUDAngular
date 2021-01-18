
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../Services/services.service';
import { UsuarioDTO } from '../../../Models/UsuarioDTO';
import { ResultModel } from '../../../Models/ResultModel';

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

  GuardarCambios() {

    if (this.Accion == "Registro") {
      this.GuardarUsuario();
    }

    if (this.Accion == "Modificacion") {
      this.ModificarUsuario();
    }
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
      ResultModel => {
        let Resu = ResultModel as ResultModel;
        if (!Resu.HasError) {
          alert(Resu.Message);
          this.ListarTodosUsuarios();
          this.MostrarModal(false, "Registro");

        } else {
          alert(Resu.Message);
        }
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

  ModificarUsuario() {
    let Usuario = new UsuarioDTO();
    Usuario.UsuarioId = this.form.get("UsuarioId").value;
    Usuario.Nombre = this.form.get("Nombre").value;
    Usuario.Apellido = this.form.get("Apellido").value;
    Usuario.Cedula = this.form.get("Cedula").value;
    Usuario.Telefono = this.form.get("Telefono").value;
    Usuario.Genero = this.form.get("Genero").value;

    this.Service.UpdateUser(Usuario).subscribe(
      ResultModel => {

        let Resu = ResultModel as ResultModel;
        if (!Resu.HasError) {

          alert(Resu.Message);
          this.ListarTodosUsuarios();
          this.MostrarModal(false, "Registro");

        } else {
          alert(Resu.Message);
        }
      }, error => {
        alert(JSON.stringify(error));
      }
    );
  }

  ListarTodosUsuarios() {
    this.Service.GetAllUsers().subscribe(

      ResultModel => {
        let Resu = ResultModel as ResultModel;

        if (!Resu.HasError) {
          this.Lista = Resu.Data;
        } else {
          alert(Resu.Message);
        }

      }, error => {
        alert(JSON.stringify(error));
      }
    );
  }

  GetUserByUserId(id: number) {
    this.Service.GetUserByUserId(id).subscribe(

      ResultModel => {
        let Resu = ResultModel as ResultModel;

        if (!Resu.HasError) {
          let User = Resu.Data as UsuarioDTO;
          this.form.controls['UsuarioId'].setValue(User.UsuarioId);
          this.form.controls['Nombre'].setValue(User.Nombre);
          this.form.controls['Apellido'].setValue(User.Apellido);
          this.form.controls['Cedula'].setValue(User.Cedula);
          this.form.controls['Telefono'].setValue(User.Telefono);
          this.form.controls['Genero'].setValue(User.Genero);
        } 
      }, error => {
        alert(JSON.stringify(error));
      }
    );
  }

  MostrarModal(ver: boolean, Accion: string) {

    if (!ver) {
      this.LimpiarCampos();
    } 
    this.showModal = ver;
    this.Accion = Accion;
  }

  EliminarUsuario(id: number) {

    let respuesta = confirm("Esta seguro que desea eliminar el usuario?");

    if (respuesta)
      this.Service.DeleteUser(id).subscribe(
        ResultModel => {
          let Resu = ResultModel as ResultModel;

          if (!Resu.HasError) {
            this.ListarTodosUsuarios();
            alert(Resu.Message);
          } else {
            alert(Resu.Message);
          }

        }, error => {
          alert(JSON.stringify(error));
        }
      );
  }

  LimpiarCampos() {
    this.form.controls['UsuarioId'].setValue("");
    this.form.controls['Nombre'].setValue("");
    this.form.controls['Apellido'].setValue("");
    this.form.controls['Cedula'].setValue("");
    this.form.controls['Telefono'].setValue("");
    this.form.controls['Genero'].setValue("");
  }

}


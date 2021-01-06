
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
        NombreCompleto: '',
        Cedula: '',
        Email: '',
        Password: '',
        Telefono: ''
      }
    );
  }

  GuardarUsuario() {
    this.Service.SaveUser().subscribe(
      Usuarios => {
        this.Lista = Usuarios;
      }, error => {
        alert(error);
      }
    );
  }

  ListarTodosUsuarios() {
    this.Service.GetAllUsers().subscribe(
      Usuarios => {
         this.Lista = Usuarios;
      }, error => {
        alert(error);
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

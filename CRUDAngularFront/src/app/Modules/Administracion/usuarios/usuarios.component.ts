
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  showModal = false;

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      NombreCompleto: '',
      Cedula: '',
      Email: '',
      Password: '',
      Telefono: '' 
    });
     
  }

  GuardarCambios() { 
    alert("Mi Nombre es: " + this.form.get("NombreCompleto").value);
    alert("Mi Cedula es: " + this.form.get("Cedula").value);
    alert("Mi Email es: " + this.form.get("Email").value);
    alert("Mi Password es: " + this.form.get("Password").value);
    alert("Mi Telefono es: " + this.form.get("Telefono").value);
  }

}

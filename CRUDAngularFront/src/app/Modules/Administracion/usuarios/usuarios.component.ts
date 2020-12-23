
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
      Nombre: ''
    });
     
  }

  submit() {

    alert("Mi Nombre es: " + this.form.get("Nombre").value);

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { SeguridadService } from '../../../Services/seguridad.service';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.css']
})
export class AutorizacionComponent implements OnInit {

  constructor(private seguridad: SeguridadService) { }

  @Input()
  Permiso: string;
  ngOnInit(): void {

  }


  EstaAutorizado(): boolean {
    if (this.Permiso) {
       
      let Permisos = this.seguridad.ObtenerPermisos();

      if (Permisos.includes(this.Permiso)) {
        return true;
      } else {
        return false;
      } 
    } else {
      return this.seguridad.EstaLogueado();
    }
  }

}

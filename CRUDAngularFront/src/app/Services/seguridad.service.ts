import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor() { }


  EstaLogueado(): boolean {
    return true;
  }

  ObtenerPermisos(): string[] {
    return ["Usuarios", "CrearUsuario", "ListarUsuario", "ModificarUsuario"];
  }

}

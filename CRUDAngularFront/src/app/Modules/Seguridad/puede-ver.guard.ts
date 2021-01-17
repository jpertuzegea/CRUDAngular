import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../../Services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PuedeVerGuard implements CanActivate {

  constructor(private seguridadServices: SeguridadService,
    private route: Router) {

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.seguridadServices.ObtenerPermisos().includes('Usuarios')) {
      return true;
    } else {
      alert("No puedes acceder al recurso");
       this.route.navigate(['/Inicio']);
    }
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Modules/Administracion/inicio/inicio.component';
import { UsuariosComponent } from './Modules/Administracion/usuarios/usuarios.component';
import { PuedeVerGuard } from './Modules/Seguridad/puede-ver.guard';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Usuarios', component: UsuariosComponent, canActivate: [PuedeVerGuard] },

  { path: '**', redirectTo: 'Inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

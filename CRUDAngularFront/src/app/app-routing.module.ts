import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Modules/Administracion/inicio/inicio.component';
import { UsuariosComponent } from './Modules/Administracion/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Usuarios', component: UsuariosComponent },

  { path: '**', redirectTo: 'Inicio' /*, canActivate: [AuthGuardService] */ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

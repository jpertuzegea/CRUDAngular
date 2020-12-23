import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NavBarComponent } from './Share/nav-bar/nav-bar.component';
import { UsuariosComponent } from './Modules/Administracion/usuarios/usuarios.component';
import { InicioComponent } from './Modules/Administracion/inicio/inicio.component';
import { WorkSpaceComponent } from './Share/work-space/work-space.component';
import { FooterComponent } from './Share/footer/footer.component';
import { ModalComponent } from './Share/Modal/modal/modal.component';
import { AgregarComponent } from './Modules/Administracion/usuarios/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavBarComponent, UsuariosComponent, InicioComponent, WorkSpaceComponent, FooterComponent, ModalComponent, AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

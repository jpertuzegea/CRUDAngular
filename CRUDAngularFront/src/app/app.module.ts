import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NavBarComponent } from './Share/nav-bar/nav-bar.component';
import { UsuariosComponent } from './Modules/Administracion/usuarios/usuarios.component';
import { InicioComponent } from './Modules/Administracion/inicio/inicio.component';
import { WorkSpaceComponent } from './Share/work-space/work-space.component';
import { FooterComponent } from './Share/footer/footer.component';
import { ModalComponent } from './Share/Modal/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    NavBarComponent, UsuariosComponent, InicioComponent, WorkSpaceComponent, FooterComponent, ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

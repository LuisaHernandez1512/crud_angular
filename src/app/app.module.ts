import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

import { UsuarioService } from './shared/usuario.service';
import { ListaPeliComponent } from './lista-peli/lista-peli.component';
import { EditarPeliComponent } from './editar-peli/editar-peli.component';
import { PeliService } from './shared/peli.service';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { IniciarsesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ComprarComponent } from './comprar/comprar.component';



@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    ListaUsuariosComponent,
    ListaPeliComponent,
    EditarPeliComponent,
    InicioComponent,
    LoginComponent,
    VistaUsuarioComponent,
    IniciarsesionComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UsuarioService,
    PeliService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

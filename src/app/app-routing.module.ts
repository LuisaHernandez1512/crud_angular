import { RouterModule, Routes } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaPeliComponent } from './lista-peli/lista-peli.component';
import { EditarPeliComponent } from './editar-peli/editar-peli.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';
import { NgModule } from '@angular/core';
import { IniciarsesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ComprarComponent } from './comprar/comprar.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
 
  
  { path:'', redirectTo:'/inicio', pathMatch:'full' },
  {path: 'inicio', component: InicioComponent},
  { path: 'peli', component: ListaPeliComponent,  canActivate: [AuthGuard] },
  { path: 'peli/editar/:id', component: EditarPeliComponent},
  { path: 'peli/agregar', component:EditarPeliComponent},  
  {path: 'users/agregar', component:LoginComponent},
  {path: 'vistaUsuario', component:VistaUsuarioComponent,  canActivate: [AuthGuard]},
  {path: 'iniciarsesion', component:IniciarsesionComponent},
  {path:'comprar/:idUsuario/:idPelicula', component:ComprarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

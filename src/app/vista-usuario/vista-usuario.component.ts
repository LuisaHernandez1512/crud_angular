import { Component, OnInit } from '@angular/core';
import { PeliModel } from '../shared/peli.model';
import { Observable } from 'rxjs';
import { PeliService } from '../shared/peli.service';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent  implements OnInit{

  peliculas: Observable<PeliModel[]> |undefined
  detallesVisible: Set<string> = new Set();

  constructor(private PeliService: PeliService, private router: Router, private LoginService:LoginService){}

  ngOnInit() {
    this.peliculas = this.PeliService.obtenerpelis();
  }

  toggleDetalles(id: string): void {
    if (this.detallesVisible.has(id)) {
      this.detallesVisible.delete(id); 
    } else {
      this.detallesVisible.add(id); 
    }
  }

  
  isDetallesVisible(id: string): boolean {
    return this.detallesVisible.has(id);
  }

  cerrarSesion(): void {
    
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');

    
    this.router.navigate(['/inicio']);
  }

  irACarrito(idPelicula: string): void {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const idUsuario = usuario.id;
  
    if (!idUsuario || !idPelicula) {
      console.error('No se encontró el usuario o la película');
      return;
    }
  
    
    this.router.navigate(['/comprar', idUsuario, idPelicula]);
  }
  


  
  
  

}

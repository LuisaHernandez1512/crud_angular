import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliModel } from '../shared/peli.model';
import { PeliService } from '../shared/peli.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-peli',
  templateUrl: './lista-peli.component.html',
  styleUrls: ['./lista-peli.component.css']
})
export class ListaPeliComponent implements OnInit{

  peliculas: Observable<PeliModel[]> |undefined

  constructor(private PeliService: PeliService, private router: Router){}

  ngOnInit() {
    this.peliculas = this.PeliService.obtenerpelis();
    
  }

  borrarpeli(id: string){
    this.PeliService.borrarpeli(id).subscribe(data => {
      console.log(data);
    })
    this.peliculas=this.PeliService.obtenerpelis()
  }

  cerrarSesion(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');


    this.router.navigate(['/inicio']);
  }
    
}

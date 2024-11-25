import { ActivatedRoute, Router } from '@angular/router';
import { ComprarService } from '../shared/comprar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  idUsuario: string = '';
  idPelicula: string = '';
  tipoTransaccion: string = '';
  fecha: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comprarService: ComprarService
  ) {}

  ngOnInit(): void {
    
    this.idUsuario = this.route.snapshot.paramMap.get('idUsuario')!;
    this.idPelicula = this.route.snapshot.paramMap.get('idPelicula')!;
  }

  realizarTransaccion(): void {
    const transaccion = {
      tipo_transaccion: this.tipoTransaccion,
      id_usuario: this.idUsuario,
      id_pelicula: this.idPelicula,
      fecha: this.fecha
    };

    this.comprarService.registrarTransaccion(transaccion).subscribe(response => {
      console.log('Transacción realizada:', response);
      alert('Compra realizada exitosamente');
      this.router.navigate(['/vistaUsuario']); 
    });
  }
}

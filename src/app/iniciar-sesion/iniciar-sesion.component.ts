import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  correo = '';
  clave = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('Correo:', this.correo, 'Clave:', this.clave);
    this.authService.login(this.correo, this.clave).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);

        const token = response.token;
        const usuario = response.usuario;
        const id = usuario.id;
        const rol = usuario.rol;

        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        localStorage.setItem('rol', rol);
        localStorage.setItem('id',id);

        console.log('Rol del usuario:', rol);

        if (rol === 'admin') {
          this.router.navigate(['/peli']);
        } else {
          this.router.navigate(['/vistaUsuario']);
        }
      }
    );
    
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const token = localStorage.getItem('token');
    
    if (token) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/iniciarsesion']); // Redirige a la página de login si no está autenticado
      return false;
    }
  }
}


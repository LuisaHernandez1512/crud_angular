import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000/users/login';

  constructor(private http: HttpClient) { }

  login(correo: string, clave: string): Observable<any> {
    console.log('Datos enviados al servidor:', { correo, clave });
    return this.http.post(this.API_URL, { correo, clave });
  }

  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  agregarUser(user:loginModel){
    return this.http.post<string>(`${this.BASE_URL}/users/registrar`,user);

  }

  obteneruser(id: string) {
    return this.http.get<loginModel[]>(`${this.BASE_URL}/users/${id}`);
  }

  actualizaruser(user: loginModel) {
    return this.http.put<string>(`${this.BASE_URL}/users/actualizar/${user.id_usuario}`, user)
  }

  

}

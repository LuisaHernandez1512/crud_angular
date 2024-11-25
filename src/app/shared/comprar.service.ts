import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {
  private API_URL = 'http://localhost:3000/transpeli/agregar';

  constructor(private http: HttpClient) {}

  registrarTransaccion(transaccion: any): Observable<any> {
    return this.http.post(this.API_URL, transaccion);
  }
}

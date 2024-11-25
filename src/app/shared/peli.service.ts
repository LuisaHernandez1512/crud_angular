import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliModel } from './peli.model';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  BASE_URL="http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerpelis(){
    return this.http.get<PeliModel[]>(this.BASE_URL+'/peli');
  }

  obtenerpeli(id: string) {
    return this.http.get<PeliModel[]>(`${this.BASE_URL}/peli/${id}`);
  }

  agregarpeli(peli: PeliModel) {
    return this.http.post<string>(`${this.BASE_URL}/peli/agregar`, peli);
  }

  actualizarpeli(peli: PeliModel) {
    return this.http.put<string>(`${this.BASE_URL}/peli/actualizar/${peli.id_pelicula}`, peli)
  }

  borrarpeli(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/peli/borrar/${id}`)
  }
}

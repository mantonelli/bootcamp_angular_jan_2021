import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Cidades, CidadesAPI } from '../models/cidades';
import { Estado, EstadoAPI, Estados } from '../models/estados';

const URL = 'http://localhost:3000/estados';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  constructor(private httpClient: HttpClient) {}

  getEstado(id: string): Observable<Estado> {
    return this.httpClient.get<Estado>(`${URL}/${id}`);
  }

  getCidades(id: string): Observable<Cidades> {
    return this.httpClient
      .get<CidadesAPI>(`${URL}/${id}/cidades`)
      .pipe(pluck('items'));
  }

  getAll(): Observable<Estados> {
    return this.httpClient.get<EstadoAPI>(`${URL}`).pipe(pluck('items'));
  }
}

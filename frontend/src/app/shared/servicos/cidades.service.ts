import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../models/cidades';

const URL = 'http://localhost:3000/cidades';

@Injectable({
  providedIn: 'root',
})
export class CidadesService {
  constructor(private httpClient: HttpClient) {}

  getCidade(id: string): Observable<Cidade> {
    return this.httpClient.get<Cidade>(`${URL}/${id}`);
  }
}

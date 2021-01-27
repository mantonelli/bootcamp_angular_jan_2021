import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Clientes, ClientesAPI } from './models/clientes';
import { environment } from '../../environments/environment';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Clientes> {
    return this.httpClient
      .get<ClientesAPI>(`${environment.apiUrl}/clientes`)
      .pipe(pluck('items'));
  }

  getCliente(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${environment.apiUrl}/clientes/${id}`);
  }

  deleteCliente(id: string): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(
      `${environment.apiUrl}/clientes/${id}`
    );
  }

  editCliente(id: string, data: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(
      `${environment.apiUrl}/clientes/${id}`,
      data
    );
  }

  insertCliente(data: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      `${environment.apiUrl}/clientes/`,
      data
    );
  }
}

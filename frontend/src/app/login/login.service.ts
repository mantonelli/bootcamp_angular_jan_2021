import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(loginData: PoPageLogin): Observable<any> {
    const { login, password } = loginData;
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/login`, {
      username: login,
      password: password,
    });
  }
}

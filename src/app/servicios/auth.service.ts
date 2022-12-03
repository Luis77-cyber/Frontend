import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { nuevoUsuario } from '../models/nuevoUsuario';
import { LoginUsuario } from '../models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8081/auth';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:nuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo',nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario);
  }
}

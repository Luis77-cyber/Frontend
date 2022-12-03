import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8081/usuario';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }
  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url,usuario);
  }
  getUsuarioId(id:number){
    return this.http.get<Usuario>(this.Url+"/"+id);
  }
  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.Url+"/"+usuario.id,usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.Url+"/"+usuario.id);
  }
}

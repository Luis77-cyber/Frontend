import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8081/experiencia';

  getExperiencia(){
    return this.http.get<Experience[]>(this.Url);
  }
  createExperiencia(experiencia:Experience){
    return this.http.post<Experience>(this.Url,experiencia);
  }
  getExperienciaId(id:number){
    return this.http.get<Experience>(this.Url+"/"+id);
  }
  updateExperiencia(experiencia:Experience){
    return this.http.put<Experience>(this.Url+"/"+experiencia.id,experiencia);
  }
  deleteExperiencia(experiencia:Experience){
    return this.http.delete<Experience>(this.Url+"/"+experiencia.id);
  }
}

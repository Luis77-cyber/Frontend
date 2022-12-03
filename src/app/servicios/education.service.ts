import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8081/educacion';

  getEducacion(){
    return this.http.get<Education[]>(this.Url);
  }
  createEducacion(educacion:Education){
    return this.http.post<Education>(this.Url,educacion);
  }
  getEducacionId(id:number){
    return this.http.get<Education>(this.Url+"/"+id);
  }
  updateEducacion(educacion:Education){
    return this.http.put<Education>(this.Url+"/"+educacion.id,educacion);
  }
  deleteEducacion(educacion:Education){
    return this.http.delete<Education>(this.Url+"/"+educacion.id);
  }
}

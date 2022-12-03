import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8081/conocimiento';

  getSkill(){
    return this.http.get<Skill[]>(this.Url);
  }
  createSkill(skill:Skill){
    return this.http.post<Skill>(this.Url,skill);
  }
  getSkillId(id:number){
    return this.http.get<Skill>(this.Url+"/"+id);
  }
  updateSkill(skill:Skill){
    return this.http.put<Skill>(this.Url+"/"+skill.id,skill);
  }
  deleteSkill(skill:Skill){
    return this.http.delete<Skill>(this.Url+"/"+skill.id);
  }
}

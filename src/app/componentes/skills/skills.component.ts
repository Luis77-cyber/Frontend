import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private service:SkillServiceService, private router:Router) { }

  skills! : Skill[];
  skill:Skill = new Skill(0,0,'');

  AddSkill(){
    this.router.navigate(['addSkill']);}
  EditSkill(){
      this.router.navigate(['editSkill']);}

  ngOnInit(): void {
    this.getConocimientos();
  }

  public getConocimientos():void{
    this.service.getSkill()
    .subscribe(data =>{
      this.skills=data;
      })
    }

  Editar(skill:Skill):void{
    localStorage.setItem("id",skill.id.toString());
    this.router.navigate(["edit"]);
  }
  
  Delete(skill:Skill){
    this.service.deleteSkill(skill)
    .subscribe(data => {
      this.skills=this.skills.filter(s=>s!==skill);
      alert("Skill eliminada");
    })
  }

}

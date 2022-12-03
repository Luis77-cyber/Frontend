import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  constructor(private service:SkillServiceService, private router:Router) { }
  skills! : Skill[];
  skill : Skill = new Skill(0,0,'');

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    if(id!=null){
      let id_p = parseInt(id);
      this.service.getSkillId(id_p) 
      .subscribe(data =>{
        this.skill=data;
    })
  }}

  Actualizar(skill:Skill){
    this.service.updateSkill(skill)
    .subscribe(data =>{
      this.skill = data;
      alert("Se actualizo con exito");
      this.router.navigate(["/"]);
    })
  }
}

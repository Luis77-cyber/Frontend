import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillServiceService } from 'src/app/servicios/skill-service.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  constructor(private service:SkillServiceService, private router:Router) { }
  skills! : Skill[];
  skill:Skill = new Skill(0,0,'');

  ngOnInit(): void {
  }

  Guardar(skill:Skill){
    this.service.createSkill(skill)
    .subscribe(data =>{
      alert("Se agregó con exito");
      this.router.navigate(["/"])
    })
  }
}

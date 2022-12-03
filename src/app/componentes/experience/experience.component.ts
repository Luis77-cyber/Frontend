import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private service:ExperienceService, private router:Router) { }

  experiencias! : Experience[];
  experiencia:Experience = new Experience(0,'','','','','');

  Add(){
    this.router.navigate(['addExp']);}
  EditExp(){
      this.router.navigate(['editExp']);}

  ngOnInit(): void {
    this.getExperiencias();
  }

  public getExperiencias():void{
    this.service.getExperiencia()
    .subscribe(data =>{
      this.experiencias=data;
      })
    }

  Editar(experiencia:Experience):void{
    localStorage.setItem("id",experiencia.id.toString());
  }
  
  Delete(experiencia:Experience){
    this.service.deleteExperiencia(experiencia)
    .subscribe(data => {
      this.experiencias=this.experiencias.filter(e=>e!==experiencia);
      alert("Experiencia eliminada");
    })
  }
}

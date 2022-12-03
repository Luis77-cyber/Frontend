import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  constructor(private service:ExperienceService, private router:Router) { }
  experiencias! : Experience[];
  experiencia:Experience = new Experience(0,'','','','','');

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    if(id!=null){
      let id_p = parseInt(id);
      this.service.getExperienciaId(id_p) 
      .subscribe(data =>{
        this.experiencia=data;
    })
  }}

  Actualizar(experiencia:Experience){
    this.service.updateExperiencia(experiencia)
    .subscribe(data =>{
      this.experiencia = data;
      alert("Se actualizo con exito");
      this.router.navigate(["/"]);
    })
  }
}

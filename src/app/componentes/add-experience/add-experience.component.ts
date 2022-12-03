import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  constructor(private service:ExperienceService, private router:Router) { }
  experiencias! : Experience[];
  experiencia:Experience = new Experience(0,'','','','','');

  ngOnInit(): void {
  }

  Guardar(experiencia:Experience){
    this.service.createExperiencia(experiencia)
    .subscribe(data =>{
      alert("Se agregó con exito");
      this.router.navigate(["/"])
    })
  }

}

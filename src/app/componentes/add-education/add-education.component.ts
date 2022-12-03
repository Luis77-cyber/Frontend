import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  constructor(private service:EducationService, private router:Router) { }
  educaciones! : Education[];
  educacion:Education = new Education(0,'','','','');

  ngOnInit(): void {
  }

  Guardar(educacion:Education){
    this.service.createEducacion(educacion)
    .subscribe(data =>{
      alert("Se agregó con exito");
      this.router.navigate(["/"])
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  constructor(private service:EducationService, private router:Router) { }
  educaciones! : Education[];
  educacion:Education = new Education(0,'','','','');

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    if(id!=null){
      let id_p = parseInt(id);
      this.service.getEducacionId(id_p) 
      .subscribe(data =>{
        this.educacion=data;
    })
  }}

  Actualizar(educacion:Education){
    this.service.updateEducacion(educacion)
    .subscribe(data =>{
      this.educacion = data;
      alert("Se actualizo con exito");
      this.router.navigate(["/"]);
    })
  }

}

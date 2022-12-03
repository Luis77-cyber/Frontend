import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private serviceEdu:EducationService, private router:Router) { }

  educaciones! : Education[];
  educacion:Education = new Education(0,'','','','');

  Add(){
    this.router.navigate(['addEdu']);}
  EditEdu(){
      this.router.navigate(['editEdu']);}

  ngOnInit(): void {
    this.getEducaciones();
  }

  public getEducaciones():void{
    this.serviceEdu.getEducacion()
    .subscribe(data =>{
      this.educaciones=data;
      })
    }

  Editar(educacion:Education):void{
    localStorage.setItem("id",educacion.id.toString());
    this.router.navigate(["edit"]);
  }
  
  Delete(educacion:Education){
    this.serviceEdu.deleteEducacion(educacion)
    .subscribe(data => {
      this.educaciones=this.educaciones.filter(e=>e!==educacion);
      alert("Education eliminada");
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/servicios/about.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  constructor(private service:AboutService, private router:Router) { }
  usuarios! : Usuario[];
  usuario:Usuario = new Usuario(0,'','','','','');

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    if(id!=null){
      let id_p = parseInt(id);
      this.service.getUsuarioId(id_p) 
      .subscribe(data =>{
        this.usuario=data;
    })
  }}

  Actualizar(usuario:Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data =>{
      this.usuario = data;
      alert("Se actualizo con exito");
      this.router.navigate(["/"]);
    })
  }
}

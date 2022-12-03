import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/servicios/about.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service:AboutService, private router:Router) { }
  usuarios! : Usuario[];
  usuario:Usuario = new Usuario(0,'','','','','');

  Add(){
    this.router.navigate(['add']);}
  Edit(){
      this.router.navigate(['edit']);}

  ngOnInit(): void {
    this.getUsuarios();
  }

  public getUsuarios():void{
    this.service.getUsuarios()
    .subscribe(data =>{
      this.usuarios=data;
      })
    }

  Editar(usuario:Usuario):void{
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(["edit"]);
  }
  
  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data => {
      this.usuarios=this.usuarios.filter(u=>u!==usuario);
      alert("Usuario eliminado");
    })
  }
}


import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/servicios/about.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-add-about',
  templateUrl: './add-about.component.html',
  styleUrls: ['./add-about.component.css']
})
export class AddAboutComponent implements OnInit {

  constructor(private service:AboutService, private router:Router) { }
  usuarios! : Usuario[];
  usuario:Usuario = new Usuario(0,'','','','','');

  ngOnInit(): void {
  }

  Guardar(usuario:Usuario){
    this.service.createUsuario(usuario)
    .subscribe(data =>{
      alert("Se agregó con exito");
      this.router.navigate(["/"])
    })
  }
}

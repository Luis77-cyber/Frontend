import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/models/banner';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-add-header',
  templateUrl: './add-header.component.html',
  styleUrls: ['./add-header.component.css']
})
export class AddHeaderComponent implements OnInit {

  constructor(private service:HeaderService, private router:Router) { }
  banners! : Banner[];
  banner:Banner = new Banner(0,'');

  ngOnInit(): void {
  }

  Guardar(banner:Banner){
    this.service.createBanner(banner)
    .subscribe(data =>{
      alert("Se agregó con exito");
      this.router.navigate(["/"])
    })
  }
}

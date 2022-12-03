import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/models/banner';
import { HeaderService } from 'src/app/servicios/header.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  public banner:Banner | undefined;
  public editBanner:Banner | undefined;
  //banner:Banner = new Banner(0,'');
  banners!:Banner[];
  
  constructor(private headerService:HeaderService, private router:Router, private tokenService:TokenService) { }

  Add(){
    this.router.navigate(['addHe']);}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    this.getBanner();
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  
  login(){
    this.router.navigate(['/login']);
  }

  public getBanner():void{
    this.headerService.getBanner()
    .subscribe(data =>{
      this.banners=data;
      })
    }

    Delete(banner:Banner){
      this.headerService.deleteBanner(banner)
      .subscribe(data => {
        this.banners=this.banners.filter(b=>b!==banner);
        alert("Banner eliminado");
      })
    }

}

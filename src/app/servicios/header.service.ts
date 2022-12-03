import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  Url = 'http://localhost:8081/banner';

  getBanner(){
    return this.http.get<Banner[]>(this.Url);
  }
  getBannerId(id:number){
    return this.http.get<Banner>(this.Url+"/"+id);
  }
  createBanner(banner:Banner){
    return this.http.post<Banner>(this.Url,banner);
  }
  updateBanner(banner:Banner){
    return this.http.put<Banner>(this.Url+"/"+banner.id,banner);
  }
  deleteBanner(banner:Banner){
    return this.http.delete<Banner>(this.Url+"/"+banner.id);
  }

}

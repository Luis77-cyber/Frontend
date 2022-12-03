import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducationComponent } from './componentes/education/education.component';
import { AddAboutComponent } from './componentes/add-about/add-about.component';
import { EditAboutComponent } from './componentes/edit-about/edit-about.component';
import { EditEducationComponent } from './componentes/edit-education/edit-education.component';
import { AddEducationComponent } from './componentes/add-education/add-education.component';
import { AboutService } from './servicios/about.service';
import { EducationService } from 'src/app/servicios/education.service';
import { HeaderService } from 'src/app/servicios/header.service';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillsComponent } from './componentes/edit-skills/edit-skills.component';
import { AddSkillsComponent } from './componentes/add-skills/add-skills.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { AddHeaderComponent } from './componentes/add-header/add-header.component';
import { AddExperienceComponent } from './componentes/add-experience/add-experience.component';
import { EditExperienceComponent } from './componentes/edit-experience/edit-experience.component';
import { LoginComponent } from './componentes/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    AddAboutComponent,
    EditAboutComponent,
    EditEducationComponent,
    AddEducationComponent,
    SkillsComponent,
    EditSkillsComponent,
    AddSkillsComponent,
    ExperienceComponent,
    AddHeaderComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius: 70,
      outerStrokeWidth: 10,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      showImage: true,
      showUnits: false,
      imageHeight: 70,
      imageWidth: 70,
      showSubtitle:false,
      animation:true
    })
  ],
  providers: [AboutService,EducationService,HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

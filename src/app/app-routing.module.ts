import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { AddAboutComponent } from './componentes/add-about/add-about.component';
import { EditAboutComponent } from './componentes/edit-about/edit-about.component';
import { EditEducationComponent } from './componentes/edit-education/edit-education.component';
import { AddEducationComponent } from './componentes/add-education/add-education.component';
import { EditSkillsComponent } from './componentes/edit-skills/edit-skills.component';
import { AddSkillsComponent } from './componentes/add-skills/add-skills.component';
import { AddHeaderComponent } from './componentes/add-header/add-header.component';
import { AddExperienceComponent } from './componentes/add-experience/add-experience.component';
import { EditExperienceComponent } from './componentes/edit-experience/edit-experience.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'add', component:AddAboutComponent},
  {path: 'edit', component:EditAboutComponent},
  {path: 'addHe', component:AddHeaderComponent},
  {path: 'editEdu', component:EditEducationComponent},
  {path: 'addEdu', component:AddEducationComponent},
  {path: 'editSkill', component:EditSkillsComponent},
  {path: 'addSkill', component:AddSkillsComponent},
  {path: 'editExp', component:EditExperienceComponent},
  {path: 'addExp', component:AddExperienceComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

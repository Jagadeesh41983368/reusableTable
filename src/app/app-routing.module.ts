import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
          path : "",redirectTo : "skills",pathMatch:"full"
  },

  {
    path : "skills",component : SkillsComponent
  },
  {
    path : "elements",component : ElementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

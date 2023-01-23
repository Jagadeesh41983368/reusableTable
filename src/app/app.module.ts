import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResuableTableComponent } from './resuable-table/resuable-table.component';
import { SkillsComponent } from './skills/skills.component';
import { ElementsComponent } from './elements/elements.component';


@NgModule({
  declarations: [
    AppComponent,
    ResuableTableComponent,
    ResuableTableComponent,
    SkillsComponent,
    ElementsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

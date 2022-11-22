import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FirstContentComponent } from './main-content/first-content/first-content.component';
import { AboutComponent } from './main-content/about/about.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { ServicesComponent } from './main-content/services/services.component';
import { SkillsComponent } from './main-content/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    FirstContentComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

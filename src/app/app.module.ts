import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { ProjectComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PrintableComponent } from './components/printable/printable.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    SkillIconComponent,
    ProjectComponent,
    EducationComponent,
    ResumeComponent,
    PrintableComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatChipsModule,
    MatCheckboxModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './public/landing/landing.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { CandidateComponent } from './private/candidate/candidate.component';
import { CompleteComponent } from './private/complete/complete.component';
import { StudiesComponent } from './private/studies/studies.component';
import { StudyComponent } from './private/study/study.component';
import { OrganizationComponent } from './private/organization/organization.component';
import { AnalisiesComponent } from './private/analisies/analisies.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    CandidateComponent,
    CompleteComponent,
    StudiesComponent,
    StudyComponent,
    OrganizationComponent,
    AnalisiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

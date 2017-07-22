import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './public/landing/landing.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { CandidateComponent } from './private/candidate/candidate.component';
import { CompleteComponent } from './private/complete/complete.component';
import { OrganizationComponent } from './private/organization/organization.component';
import { StudiesComponent } from './private/studies/studies.component';
import { StudyComponent } from './private/study/study.component';
import { AnalisiesComponent } from './private/analisies/analisies.component';

import { AuthGuard } from './guards/auth.guard';
import { PsicologistGuard } from './guards/psicologist.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candidate', component: CandidateComponent, canActivate: [AuthGuard, CandidateGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, CandidateGuard, PsicologistGuard] },
  { path: 'complete', component: CompleteComponent, canActivate: [AuthGuard] },
  { path: 'studies', component: StudiesComponent, canActivate: [AuthGuard] },
  { path: 'study', component: StudyComponent, canActivate: [AuthGuard] },
  { path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard] },
  { path: 'analisies', component: AnalisiesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, PsicologistGuard, CandidateGuard, UserService]
})
export class AppRoutingModule { }

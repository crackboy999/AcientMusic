import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { IsAuthGuard } from './guards/is-auth.guard';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToInicio = () => redirectUnauthorizedTo(['inicio']);

const routes: Routes = [
  { path: 'home', component: LandingComponent, canActivate: [IsAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [IsAuthGuard] },
  { path: 'inicio', component: HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: '', component: LandingComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

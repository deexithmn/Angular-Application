import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import {JobsComponent} from './components/jobs/jobs.component';
import {LoginComponent} from './components/login/login.component';
import {SigninComponent} from './components/signin/signin.component';
import {FireUserService} from '../services/fire-user.service';
import {FirestoredemoComponent} from './components/firestoredemo/firestoredemo.component';
import {LocalForecastComponent} from './components/local-forecast/local-forecast.component';
import {FlightsComponent} from './components/flights/flights.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'userfire',
    component: FirestoredemoComponent
  },
  {
    path: 'forecast',
    component: LocalForecastComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

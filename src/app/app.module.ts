import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent} from './components/add-user/add-user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule} from '@angular/forms';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { HttpClientModule} from '@angular/common/http';
import { environment} from '../environments/environment';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { FireUserService} from '../services/fire-user.service';
import { FirestoredemoComponent} from './components/firestoredemo/firestoredemo.component';
import { LocalForecastComponent} from './components/local-forecast/local-forecast.component';
import { FlightsComponent} from './components/flights/flights.component';

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    LoginComponent,
    SigninComponent,
    FirestoredemoComponent,
    AddUserComponent,
    LocalForecastComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'DemoProject'),
    AngularFirestoreModule,

  ],
  providers: [
    FireUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

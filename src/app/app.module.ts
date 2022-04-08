import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registrationComponent/registration.component';
import { LoginComponent } from './loginComponent/login.component';
import { ProfileComponent } from './profileComponent/profile.component';
import { FormsModule } from '@angular/forms';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

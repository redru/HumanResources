/**
 * Created by admin on 17/10/2016.
 */
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { FormsModule }          from '@angular/forms';

import { AuthService }          from './services/authentication/auth.service';
import { AppComponent }         from './app.component';
import { LoginComponent }       from './components/login/login.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { RegisterComponent }    from "./components/register/register.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [ AuthService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }

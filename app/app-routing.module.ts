/**
 * Created by admin on 17/10/2016.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { LoginComponent }       from './components/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',        component: LoginComponent },
    { path: 'dashboard',    component: DashboardComponent }
    /* { path: 'detail/:id',   component: HeroDetailComponent } */
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

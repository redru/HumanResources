/**
 * Created by admin on 17/10/2016.
 */
import { Component }        from '@angular/core';

@Component({
    selector: 'human-resources-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/login">Login</a>
            <a routerLink="/dashboard">Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Applicazione risorse umane';
}

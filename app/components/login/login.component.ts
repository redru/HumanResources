/**
 * Created by admin on 17/10/2016.
 */
import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { AuthService }      from '../../services/authentication/auth.service'

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements OnInit {
    username: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.authService.reset();
    }

    onSubmit(event): void {
        event.preventDefault();

        let subscription = this.authService.login(this.username, this.password).subscribe(
            (logged) =>  {
                subscription.unsubscribe();

                if (logged)
                    this.router.navigate([ '/dashboard' ]);
            },
            (error) => {
                alert(error.result.message);
            });
    }
}

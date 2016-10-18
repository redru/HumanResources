/**
 * Created by admin on 17/10/2016.
 */
import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { AuthService }      from '../../services/authentication/auth.service';
import { User}              from '../../services/authentication/user';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: [ 'register.component.css' ]
})

export class RegisterComponent implements OnInit {
    username: string;
    password: string;
    name: string;
    surname: string;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.reset();
    }

    onSubmit(event): void {
        event.preventDefault();
        let user = new User(this.username, this.password, this.name, this.surname);

        let subscription = this.authService.register(user).subscribe(
            (response) => {
                subscription.unsubscribe();
                let data = response.json();
                alert(data.result.message);

                if (response.status == 200)
                    this.router.navigate([ '/dashboard' ]);
            },
            (error) => {
                alert(error.result.message);
            });
    }
}

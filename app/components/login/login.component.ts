/**
 * Created by admin on 17/10/2016.
 */
import { Component, OnInit }        from '@angular/core';

import { AuthService }      from '../../services/authentication/auth.service'
import { Authentication }   from '../../services/authentication/authentication'

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.reset();
    }

    onSubmit(): void {

    }

}

/**
 * Created by admin on 17/10/2016.
 */
import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from "rxjs";
import 'rxjs/Rx';

import { Authentication }   from './authentication'

@Injectable()
export class AuthService {

    private LOGIN_URL: string = '/api/authentication/login';
    private authentication: Authentication;

    constructor(private http: Http) { };

    login(username, password): Observable<Response> {
        return this.http.post(this.LOGIN_URL, { data: { username: username, password: password } })
            .map((res: Response) => res.json());
    }

    getAuthentication(): Authentication {
        return this.authentication;
    }

    reset(): void {
        this.authentication = new Authentication('', '', '');
    }

}

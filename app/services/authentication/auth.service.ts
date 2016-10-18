/**
 * Created by admin on 17/10/2016.
 */
import { Injectable }                                   from '@angular/core';
import { Http, Response, Headers, RequestOptions }      from '@angular/http';
import { Observable }                                   from 'rxjs/Rx';

import { Authentication }                               from './authentication'

@Injectable()
export class AuthService {

    private LOGIN_URL: string = 'api/authentication/login';
    private authentication: Authentication;

    constructor(private http: Http) { };

    login(username, password): Observable<Boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({ data: { username: username, password: password } });
        return this.http.post(this.LOGIN_URL, body, options)
            .map((res: Response) => {
                let authentication = res.json();
                this.authentication = new Authentication(authentication.username, authentication.name, authentication.surname);
                return true;
            });
    }

    getAuthentication(): Authentication {
        return this.authentication;
    }

    reset(): void {
        this.authentication = new Authentication(null, null, null);
    }

}

/**
 * Created by admin on 17/10/2016.
 */
import { Injectable }                                   from '@angular/core';
import { Http, Response, Headers, RequestOptions }      from '@angular/http';
import { Observable }                                   from 'rxjs/Rx';

import { Authentication }       from './authentication';
import { User }                 from './user';

@Injectable()
export class AuthService {
    private LOGIN_URL: string       = 'api/authentication/login';
    private REGISTER_URL: string    = 'api/authentication/register';

    private authentication: Authentication;

    constructor(private http: Http) { };

    login(username, password): Observable<Boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({ data: { username: username, password: password } });
        return this.http.post(this.LOGIN_URL, body, options)
            .map((response: Response) => {
                let authentication = response.json();
                this.authentication = new Authentication(authentication.username, authentication.name, authentication.surname);
                return true;
            })
            .catch((error: any) => Observable.throw(error.json()));
    }

    register(user: User): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify({ data: user });
        return this.http.post(this.REGISTER_URL, body, options)
            .map((response: Response) => response)
            .catch((error: any) => Observable.throw(error.json()));
    }

    getAuthentication(): Authentication {
        return this.authentication;
    }

    reset(): void {
        this.authentication = new Authentication(null, null, null);
    }

}

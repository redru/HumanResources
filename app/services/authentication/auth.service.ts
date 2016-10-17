/**
 * Created by admin on 17/10/2016.
 */
import { Injectable }       from '@angular/core';

import { Authentication }   from './authentication'

@Injectable()
export class AuthService {

    authentication: Authentication;

    login(): void {

    }

    getAuthentication(): Authentication {
        return this.authentication;
    }

    reset(): void {
        this.authentication = new Authentication('', '', '');
    }

}

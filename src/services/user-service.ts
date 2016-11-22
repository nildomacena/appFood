import { Observable } from 'rxjs/Observable';
import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    user: User = new User();
    //observable: Observable<User> = this._observable.;
    constructor() { }

    getUserData(){

    }
}
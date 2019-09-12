import { Injectable,Input,Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
import { ConnectiontoAPI } from 'src/ConnectiontoAPI';
import { Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    public getLoggedInName = new Subject();
    // @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    login(username: string, password: string) {
        return this.http.post<any>(`${ConnectiontoAPI.SERVER_BASE_URL}/users/login`, { username : username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('usertoken', JSON.stringify(user));
                    console.log("logged user token: " +(localStorage.getItem('usertoken')));
                    this.getLoggedInName.next('LoggedIn');
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('usertoken');
    }
}

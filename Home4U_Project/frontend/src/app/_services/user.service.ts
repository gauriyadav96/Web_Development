import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { ConnectiontoAPI } from 'src/ConnectiontoAPI';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${ConnectiontoAPI.SERVER_BASE_URL}/users`);
    }

    getById(id: String) {
        console.log("user service"+id);
        return this.http.get(`${ConnectiontoAPI.SERVER_BASE_URL}/users/userProfile`, { headers: { Authorization: `Bearer ${id}` }});
    }

    register(user: User) {
        console.log("user: "+ user)
        return this.http.post(`${ConnectiontoAPI.SERVER_BASE_URL}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${ConnectiontoAPI.SERVER_BASE_URL}/users/`, user);
    }

    delete(id: number) {
        return this.http.delete(`${ConnectiontoAPI.SERVER_BASE_URL}/users/` + id);
    }
}

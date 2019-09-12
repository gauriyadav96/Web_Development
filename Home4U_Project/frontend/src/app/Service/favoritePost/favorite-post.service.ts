import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ConnectiontoAPI } from '../../../ConnectiontoAPI';

@Injectable({
  providedIn: 'root'
})
export class FavoritePostService {

  constructor(private http: HttpClient) { }

  getFavPosts() {
    return this.http.get(`${ConnectiontoAPI.SERVER_BASE_URL}/favorites`);
  }

  addFavorites(userId,firstname,streetAddress1, streetAddress2, price) {
     const favorite = {
       userId:userId,
       firstname:firstname,
       streetAddress1: streetAddress1,
       streetAddress2: streetAddress2,
       price: price,
     };
     return this.http.post(`${ConnectiontoAPI.SERVER_BASE_URL}/favorites/add`, favorite);
   }

   deletePost(id) {
     return this.http.get(`${ConnectiontoAPI.SERVER_BASE_URL}/favorites/${id}`);
   }
}

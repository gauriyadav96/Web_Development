import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectiontoAPI } from '../../../ConnectiontoAPI';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
import { Post } from '../../models/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostApartmentService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${ConnectiontoAPI.SERVER_BASE_URL}/posts`);
  }

  // getPostByPlace(queryTitle: string): Observable<Post[]> {
  //    return this.http.get(`${this.API_PATH}/posts?q=${queryTitle}`)
  //      .map(res => res.json().items || []);
  //  }

  getPostById(id) {
    return this.http.get(`${ConnectiontoAPI.SERVER_BASE_URL}/posts/${id}`);
  }

  addPost(firstname, userId, imagepath, lastname, email, phone, extension, advertiserType, streetAddress1, streetAddress2, city, state, zip, price, propertyType, bedrooms, bathrooms, forRent, description) {
    const post = {
      firstname: firstname,
      userId:userId,
      imagepath:imagepath,
      lastname: lastname,
      email:email,
      phone:phone,
      extension:extension,
      advertiserType:advertiserType,
      streetAddress1:streetAddress1,
      streetAddress2:streetAddress2,
      city:city,
      state:state,
      zip:zip,
      price:price,
      propertyType:propertyType,
      bedrooms:bedrooms,
      bathrooms:bathrooms,
      forRent:forRent,
      description: description,
      //status: status
    };
    return this.http.post(`${ConnectiontoAPI.SERVER_BASE_URL}/posts/add`, post);
  }

  updatePost(id, firstname, lastname, email, phone, extension, advertiserType, streetAddress1, streetAddress2, city, state, zip, price, propertyType, bedrooms, bathrooms, forRent, description) {
    const post = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      email:email,
      phone:phone,
      extension:extension,
      advertiserType:advertiserType,
      streetAddress1:streetAddress1,
      streetAddress2:streetAddress2,
      city:city,
      state:state,
      zip:zip,
      price:price,
      propertyType:propertyType,
      bedrooms:bedrooms,
      bathrooms:bathrooms,
      forRent:forRent,
      description: description,
    };
    return this.http.post(`${ConnectiontoAPI.SERVER_BASE_URL}/posts/${id}`, post);
  }

  deletePost(id) {
    return this.http.get(`${ConnectiontoAPI.SERVER_BASE_URL}/posts/${id}`);
  }
}

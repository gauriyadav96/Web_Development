import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { PostApartmentService } from '../../Service/postApartment/post-apartment.service';

const URL = 'http://localhost:4000/post/upload';

@Component({
  selector: 'app-post-apartment',
  templateUrl: './post-apartment.component.html',
  styleUrls: ['./post-apartment.component.scss']
})
export class PostApartmentComponent implements OnInit {

  createForm: FormGroup;
  loading = false;
  model: any = {};
  submitted = false;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  imagepath: String;
  userId:String;
  constructor(private addpostservice: PostApartmentService, private updatepostservice: PostApartmentService, private deletepostservice: PostApartmentService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      email: '',
      phone: '',
      extension: '',
      advertiserType: '',
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
      zip: '',
      price: '',
      propertyType: '',
      bedrooms: '',
      bathrooms: '',
      forRent: '',
      description: ''
    });
    this.userId = JSON.parse(localStorage.getItem('usertoken'))['user']['_id'];
    console.log(this.userId);
  }

  addPost(firstname, lastname, email, phone, extension, advertiserType, streetAddress1, streetAddress2, city, state, zip, price, propertyType, bedrooms, bathrooms, forRent, description) {
    console.log(firstname);
    console.log("userid"+ this.userId)

    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(extension);
    console.log(advertiserType);
    console.log(streetAddress1);
    console.log(streetAddress2);
    console.log(city);
    console.log(state);
    console.log(zip);
    console.log(price);
    console.log(propertyType);
    console.log(bedrooms);
    console.log(bathrooms);
    console.log(forRent);
    console.log(description);
    console.log(this.imagepath);
    this.addpostservice.addPost(firstname, this.userId,this.imagepath,lastname, email, phone, extension, advertiserType, streetAddress1, streetAddress2, city, state, zip, price, propertyType, bedrooms, bathrooms, forRent, description).subscribe(() => {
    });
    alert('Post added successfully');
  }

  updatePost(id, firstname, lastname, email, phone, extension, advertiserType, streetAddress1, streetAddress2, city, state, zip, price, propertyType, bedrooms, bathrooms, forRent, description) {
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(extension);
    console.log(advertiserType);
    console.log(streetAddress1);
    console.log(streetAddress2);
    console.log(city);
    console.log(state);
    console.log(zip);
    console.log(price);
    console.log(propertyType);
    console.log(bedrooms);
    console.log(bathrooms);
    console.log(forRent);
    console.log(description);

    this.updatepostservice.updatePost(id, firstname, lastname, email, phone, extension, advertiserType, streetAddress1, streetAddress2, city, state, zip, price, propertyType, bedrooms, bathrooms, forRent, description).subscribe(() => {
      // this.router.navigate(['/list']);
    });
  }

  deletePost(id) {
    this.deletepostservice.deletePost(id).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  ngOnInit() {
    console.log(URL);
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item.file.name, status, response);
      this.imagepath = item.file.name;
      alert('File uploaded successfully');
    };
  }
}

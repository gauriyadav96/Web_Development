import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  userdetails: User;
  updateUser: FormGroup;
  userId: string;

  constructor(private auth: AuthenticationService, private userService: UserService, private fb: FormBuilder, private router: Router,) { 
    this.updateUser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: '',
      city: '',
      state: '',
      zip: '',
    });
    this.userId = JSON.parse(localStorage.getItem('usertoken'))['user']['_id'];
    console.log(this.userId);
  }

  ngOnInit() {
    this.userdetails = JSON.parse(localStorage.getItem('usertoken'))['user']
    console.log("password: ",this.userdetails.password);
    // console.log(JSON.parse(localStorage.getItem('usertoken'))['user']['emailId'])
  }

  updateUserInfo(firstName, lastName, phone, city, state, zip){

      this.userService.update(this.updateUser.value).subscribe(() => {
      });
      alert('User updated successfully');
  }
}

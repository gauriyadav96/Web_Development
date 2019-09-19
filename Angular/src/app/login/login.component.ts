import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router, NavigationExtras,ActivatedRoute} from "@angular/router";
import { loginDto } from './loginDto.model';
import {LoginService} from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empLoginForm: FormGroup;
  loginDtoObj: loginDto;


  constructor(private fb: FormBuilder, private loginService:LoginService, private route:Router) { }

  ngOnInit() {

    this.empLoginForm = this.fb.group({      // initializes all formcontrolnames and give the control to empForm hence it carries all values as a single object.
      'username': new FormControl(''),
      'password': new FormControl('')
  })

}

    loginEmp(lemp:loginDto) {//same identical property for the formcontrolname
         
        if(lemp.username!="yadav.gau"){
            localStorage.setItem('username','');
            alert("Wrong username")  ;
          }

         let isLoggedIn=this.loginService.isAuthenticated(lemp)

        if(isLoggedIn) {
          // alert("going inside dash")
           this.route.navigate(['/dashboard'])

        } else {
        // this.route.navigate(['/reject']);
        alert("rejected from login service")
        }

        }

}

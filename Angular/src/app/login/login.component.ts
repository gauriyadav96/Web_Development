import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Router, NavigationExtras,ActivatedRoute} from "@angular/router";
import { loginDto } from './loginDto.model';
import {LoginService} from '../services/login.service';
import { registerDto } from '../register/registerDto.model';
import { EmpService } from '../services/employeeService.component';
import { authDto } from './auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  empLoginForm: FormGroup;
  loginDtoObj: loginDto;
  userCheck: Array<string>;
  status: boolean = false;

  auth: authDto;
  emps: registerDto[] = [];

  constructor(private fb: FormBuilder, private loginService:LoginService, private route:Router, private empService: EmpService) { }

  ngOnInit() {

    this.empLoginForm = this.fb.group({      // initializes all formcontrolnames and give the control to empForm hence it carries all values as a single object.
      'username': new FormControl(''),
      'password': new FormControl('')
  })

}

    loginEmp(lemp:loginDto) {//same identical property for the formcontrolname
      
      if(this.status==false){

          this.empService.emps().subscribe((data) => {
              this.emps = data;
       
              for(var i=0;i<this.emps.length;i++){
                  
                if((this.emps[i].username === lemp.username) && this.emps[i].pwd === lemp.password){
                  alert("Hello "+lemp.username);
                  this.status=true;  

                  localStorage.setItem('auth_status', this.status.toString());

                  console.log(this.status);

                  break;
              }
            }
            if(this.status==true){
             
                 this.route.navigate(['/dashboard']) ;
            
            }else{
                alert('Employee rejected');
                this.status=false;
                localStorage.setItem('auth_status', this.status.toString());
                this.route.navigate(['/reject']) ;
            }
  
            },
              err => {
                alert("Employee not found !");
              },
              () => { console.log('Method Executed') })
          
      } 
      
    }

  
    }



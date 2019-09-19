import { Component, OnInit } from '@angular/core';
import { registerDto } from './registerDto.model';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ServerResponse } from '../server/serverResponse';
import { EmpService } from '../services/employeeService.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  empForm: FormGroup;
  registerDtoObj: registerDto;
  response:ServerResponse;


  constructor(private fb: FormBuilder, private empService:EmpService) { }

  ngOnInit() {

    this.empForm = this.fb.group({      // initializes all formcontrolnames and give the control to empForm hence it carries all values as a single object.
      'fname' : new FormControl(''),
      'lname' : new FormControl(''),
      'salary' : new FormControl(''),
      'contact' : new FormControl(''),
      'dept' : new FormControl(''),
      'designation' : new FormControl(''),
      'eid': new FormControl(''),
      'pwd': new FormControl('')
})
  }


  registerEmp(emp:registerDto){   //emp is the model class object
    
    alert(emp.fname);  
    this.empService.saveEmp(emp).subscribe((data) => {
        this.response=data;
        alert("Employee saved !");

    },
      err => {
        alert("Employee not saved !");
      },
      () => { console.log('Method Executed') }
    );
          
        }
  

}

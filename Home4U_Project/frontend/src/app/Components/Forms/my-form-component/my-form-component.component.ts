import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form-component',
  templateUrl: './my-form-component.component.html',
  styleUrls: ['./my-form-component.component.scss']
})
export class MyFormComponentComponent implements OnInit {
  user = {
    username:'',
    password:''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(theForm: NgForm) {
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    console.log(theForm.value.username);
  }
}

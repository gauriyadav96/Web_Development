import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../_services/alert.service'
import { UserService } from '../../_services/user.service'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  // providers: [UserService,AlertService]
  providers:[UserService]
})
export class RegisterUserComponent implements OnInit {

    registerForm: FormGroup;
    loading = false;
    model: any = {};
    submitted = false;
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    showSucessMessage: boolean;
    serverErrorMessages: string;

    constructor(
          private formBuilder: FormBuilder,
          private router: Router,
          private userService: UserService,
          private alertService: AlertService) { }

      ngOnInit() {
          this.registerForm = this.formBuilder.group({
              firstName: ['', Validators.required],
              lastName: ['', Validators.required],
              username: ['', Validators.required],
              emailId: ['', Validators.required],
              password: ['', [Validators.required, Validators.minLength(6)]]
          });
      }

      // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log("reg values "+this.registerForm.value)
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .subscribe(
                data => {
                    console.log("registration data: " + data)
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

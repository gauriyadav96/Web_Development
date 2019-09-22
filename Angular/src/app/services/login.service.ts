import { Injectable } from '@angular/core';
import { loginDto } from '../login/loginDto.model'
import { EmpService } from './employeeService.component';
import { registerDto } from '../register/registerDto.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  emps: registerDto[] = [];


  constructor(private empService: EmpService) { }

  public isAuthenticated(emp:loginDto):boolean{

       this.empService.emps().subscribe((data) => {
        this.emps = data;

        for(var i=0;i<=this.emps.length;i++){
          if((this.emps[i].username != emp.username) && this.emps[i].pwd != emp.password){
              return false;   
          }
        }

          alert("Hello "+emp.username);
          localStorage.setItem('username',emp.username);
          localStorage.setItem('password',emp.password);
          return true;

        //  } else {
        //       alert("inside login service but rejected");
        //       return false;
        // }
      //  }
  
      },
        err => {
          alert("Employee not found !");
          // return err;
        }
        // ,() => { console.log('Method Executed') }
      );

        //   if(emp.username=='101'){
        //         // alert(emp.username+" is inside the login service class");
        //         localStorage.setItem('username',emp.username);
        //         return true;
        // } else {
        //         alert("inside login service but rejected");
        //   return false;
        // }

    return true;
    }
  
}

import { Injectable } from '@angular/core';
import { loginDto } from '../login/loginDto.model'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  public isAuthenticated(emp:loginDto):boolean{

          if(emp.username=="yadav.gau"){
                // alert(emp.username+" is inside the login service class");
                localStorage.setItem('username',emp.username);
                return true;
        } else {
                alert("inside login service but rejected");
          return false;
        }
    

  }
}

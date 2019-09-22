
import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { EmpService} from './employeeService.component'



@Injectable({
  providedIn: 'root'
})

export class AuthDashService implements CanActivate {

  constructor(private route:Router, private empService: EmpService ) { }

  canActivate():boolean{

          let userStatus = localStorage.getItem('auth_status');

          if(JSON.parse(userStatus)===true){
              alert('Successfully authorized to get dashboard url');

                return true;
          }else{
              alert('unauthorized to get the url');
              this.route.navigate(['/login']);
                return false;
          }
   }


}



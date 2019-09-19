
import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthDashService implements CanActivate {

  constructor(private route:Router ) { }

  canActivate():boolean{
      let user=localStorage.getItem('username');
      // alert(user);
      if(user=="yadav.gau"){
          alert('Successfully authorized to get dashboard url');
            return true;
      }else{
          alert('unauthorized to get the url');
          //this.route.navigate(['/reject']);
            return false;
      }
   }


}

import { ChangeDetectorRef, ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';
import { map } from 'rxjs/operators';
import { UserService } from '../../_services/user.service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class MyNavComponent implements OnInit {
  currentUser: User;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    ngOnInit() {
      this.authenticationService.getLoggedInName.subscribe(name => {
        this.currentUser = JSON.parse(localStorage.getItem('usertoken'))['user'];
        console.log(this.currentUser.firstName)
      });
    }
    // ngOnInit() {
    //   console.log("on init called");
    //   this.authenticationService.getEmitter('getLoggedInName').subscribe(name => console.log(name));
    // }

  constructor(private router:Router, private breakpointObserver: BreakpointObserver,private userService: UserService,private authenticationService: AuthenticationService) {
    console.log("constructor called");
    if(localStorage.getItem('usertoken')){
      this.currentUser = JSON.parse(localStorage.getItem('usertoken'))['user'];
      console.log("user :"+ this.currentUser);
    }
  }

  private loadUserProfile(){
    console.log("inside userprofile")
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')["user"]);
    // this.userService.getById(this.currentUser).subscribe(data => {console.log("userprofile data: "+ data) });
  }

  navigateHomepage(){
    this.router.navigate(['/home']);
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }
  // ngOnInit() {
  //       this.loadAllUsers();
  //   }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PostApartmentComponent } from './Components/post-apartment/post-apartment.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';

import { ListPropertyComponent } from './Components/list-property/list-property.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  { path: 'viewposts/:searchPlace', component: ListPropertyComponent},
  { path: 'post-apartment', component: PostApartmentComponent},
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginUserComponent },
   { path: 'userProfile', component: UserProfileComponent}
   // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{onSameUrlNavigation: `reload`})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

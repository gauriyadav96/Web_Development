import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './Components/navbar/navbar.component';
import { PostApartmentComponent } from './Components/post-apartment/post-apartment.component';
import { ListPropertyComponent } from './Components/list-property/list-property.component';
import { MatCardModule, MatListModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritePageComponent } from './Components/favorite-page/favorite-page.component';
import { PostApartmentService } from './Service/postApartment/post-apartment.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { UserService } from './_services/user.service';
// Comment by Neha-importing form module
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { HomepageComponent } from './Components/homepage/homepage.component';
// import { GooglePlacesDirective } from './Directives/google-places.directive';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { SearchPlaceFilterPipe } from './pipes/search_place_filter.pipe'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserpostsComponent } from './Components/userposts/userposts.component';
import { UserpostsdetailComponent } from './Components/userpostsdetail/userpostsdetail.component';
import { ViewApartmentDetailsComponent } from './Components/view-apartment-details/view-apartment-details.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';


const appRoutes: Routes = [
  // Comment by Neha-Adding Routing code
  { path: 'post-apartment', component: PostApartmentComponent },
  // { path: 'edit/:id', component: ListComponent },
  { path: 'posts', component: ListPropertyComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:"favorite-page",component:FavoritePageComponent},
  {path:"userpost",component:UserpostsComponent},
  {path:"userpostsdetail",component:UserpostsdetailComponent},
  {path:"viewApartmentDetails",component:ViewApartmentDetailsComponent},
  {path:"viewContactDetails",component:ContactUsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    PostApartmentComponent,
    ListPropertyComponent,
    FavoritePageComponent,
    HomepageComponent,
    RegisterUserComponent,
    LoginUserComponent,
    SearchPlaceFilterPipe,
    UserProfileComponent,
    FileSelectDirective,
    UserpostsComponent,
    UserpostsdetailComponent,
    ViewApartmentDetailsComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    GooglePlaceModule,
    HttpModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
         apiKey:'AIzaSyCK6jA472Ok3Wh1cxOni7kUYGfCv8KJOJ4',
          libraries: ["places"]
      })
  ],
  // providers: [PostApartmentService],
  providers: [PostApartmentService, AuthenticationService, UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }

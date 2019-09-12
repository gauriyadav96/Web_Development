/// <reference types="@types/googlemaps" />
import { Component, NgZone } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { MapsAPILoader } from '@agm/core';
import { Address } from "ngx-google-places-autocomplete/objects/address";
// import { google } from 'googlemaps';
import { ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public title = 'Places';
  public addrKeys: string[];
  public addr: object;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private route: Router) {  }
  getPostofSearchedPlaces(searchPlace){

     console.log(searchPlace);
     if(searchPlace){
       let navigationExtras: NavigationExtras = {
              queryParams: {
                  "searchPlace": searchPlace
              }
          };
          console.log(navigationExtras);
       this.route.navigate(['viewposts/',searchPlace],navigationExtras);
     }else{
       alert("Please enter valid place");
     }

  }

  @ViewChild('places') places: GooglePlaceDirective;
   @ViewChild('search' ) public searchElement: ElementRef;
   lat: number = -33.785809;
   lng: number = 151.121195;
     public handleAddressChange(address: Address) {
         console.log(address.geometry.location.lng());
         console.log(address.geometry.location.lat());
         console.log(address.geometry.location.toJSON());
         console.log(address.geometry.viewport.getNorthEast());
         this.lng = address.geometry.location.lng();
         this.lat  = address.geometry.location.lat();
     }

  // constructor(private zone: NgZone) {}
}

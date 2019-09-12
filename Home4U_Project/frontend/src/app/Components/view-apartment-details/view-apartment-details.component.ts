import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FavPost} from "../../models/favorite.model";
import {FavoritePostService} from "../../Service/favoritePost/favorite-post.service";
import {User} from "../../_models";
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-apartment-details',
  templateUrl: './view-apartment-details.component.html',
  styleUrls: ['./view-apartment-details.component.scss']
})
export class ViewApartmentDetailsComponent implements OnInit {

  selectedpost: Post;
  currentUser: User;
  private sub: any;
  favoritePosts: FavPost[];
  likestatus : boolean = false ;

  constructor(private route: ActivatedRoute, private router: Router,private favoritepostService: FavoritePostService) {
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.selectedpost = JSON.parse(params["selectedpost"]);
      // this.selectedpost = JSON.parse(params["selectedpost"]['description']);
      console.log("selected post in post detail: " + this.selectedpost['streetAddress1'] + this.selectedpost['firstname']);
    });
  }

  addRemoveFavorites(favpost){
    //if you just want to toggle the class; change toggle variable.
    this.likestatus = !this.likestatus;
    if(this.likestatus){
      console.log(favpost.firstname);
      console.log(favpost.streetAddress1);
      console.log(favpost.streetAddress2)
      console.log(favpost.price);
      this.favoritepostService.addFavorites('123',favpost.firstname,favpost.streetAddress1,favpost.streetAddress2,favpost.price)
        .subscribe((data: FavPost[]) => {
          console.log(data);
          this.favoritePosts = data;
          console.log('Data requested ... ');
          console.log(this.favoritePosts);
        });
    }
  }

  savePdf(){
        var data = document.getElementById('contentToConvert');
         html2canvas(data).then(canvas => {
           // Few necessary setting options
           var imgWidth = 208;
           var pageHeight = 295;
           var imgHeight = canvas.height * imgWidth / canvas.width;
           var heightLeft = imgHeight;

           const contentDataURL = canvas.toDataURL('image/png')
           let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
           var position = 0;
           pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
           pdf.save('MYPost.pdf'); // Generated PDF
         });
        }
  }

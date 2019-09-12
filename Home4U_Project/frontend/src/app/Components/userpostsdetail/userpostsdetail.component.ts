import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Router, ActivatedRoute } from '@angular/router';
import {FavPost} from "../../models/favorite.model";
import {FavoritePostService} from "../../Service/favoritePost/favorite-post.service";

@Component({
  selector: 'app-userpostsdetail',
  templateUrl: './userpostsdetail.component.html',
  styleUrls: ['./userpostsdetail.component.scss']
})
export class UserpostsdetailComponent implements OnInit {
  selectedpost:Post;
  private sub: any;
  favoritePosts: FavPost[];
  likestatus : boolean = false ;
  constructor(private route: ActivatedRoute,private router: Router,private favoritepostService: FavoritePostService) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
        this.selectedpost = JSON.parse(params["selectedpost"]);
        // this.selectedpost = JSON.parse(params["selectedpost"]['description']);
        console.log("selected post in post detail: "+ this.selectedpost['description']);
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
}

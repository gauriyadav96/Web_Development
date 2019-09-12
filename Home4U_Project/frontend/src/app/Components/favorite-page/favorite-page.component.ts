import { Component, OnInit } from '@angular/core';
import { FavoritePostService } from '../../Service/favoritePost/favorite-post.service';
import { FavPost } from '../../models/favorite.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
  // encapsulation : ViewEncapsulation.Native
})
export class FavoritePageComponent implements OnInit {

  favPost: FavPost[];
  constructor(private favoritePostService: FavoritePostService, private router: Router) { }

  ngOnInit() {
    this.getFavApartments();
  }

  getFavApartments() {
    this.favoritePostService.getFavPosts()
      .subscribe((data: FavPost[]) => {
        console.log(data);
        this.favPost = data;
        console.log('Data requested ... ');
        console.log(this.favPost);
      });
  }


}

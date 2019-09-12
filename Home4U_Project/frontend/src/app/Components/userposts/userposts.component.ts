import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { FavoritePostService } from '../../Service/favoritePost/favorite-post.service';
import { PostApartmentService } from '../../Service/postApartment/post-apartment.service';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import {FavPost} from "../../models/favorite.model";
import { User } from '../../_models/user';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.scss']
})
export class UserpostsComponent implements OnInit {
  posts: Post[] = [];
  currentUser: User;
  id:any =''
  favoritePosts: FavPost[];
  likestatus : boolean = false ;

  constructor(private postapartmentService: PostApartmentService, private route: ActivatedRoute, private router: Router) {
    if(localStorage.getItem('usertoken')){
      this.currentUser = JSON.parse(localStorage.getItem('usertoken'))['user'];
      this.id = JSON.parse(localStorage.getItem('usertoken'))['user']['_id']
      console.log("user :"+ this.id);
    }
  }

  ngOnInit() {
    this.getPostedApartments();
  }

  getPostedApartments() {
    this.postapartmentService.getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
        // console.log('filtered ... '+ this.filteredPosts);
      });
    // this.postapartmentService.getPostById(this.id)
    //   .subscribe((data: Post[]) => {
    //     this.posts = data;
    //     // console.log('filtered ... '+ this.filteredPosts);
    //   });
  }

  viewDetails(post: Post) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "selectedpost": JSON.stringify(post)
      }
    };
    console.log("post ", navigationExtras)
    localStorage.setItem
    this.router.navigate([`/userpostsdetail`], navigationExtras);
  }

}

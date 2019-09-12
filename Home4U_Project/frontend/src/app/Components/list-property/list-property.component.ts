import { Component, OnInit } from '@angular/core';
import { PostApartmentService } from '../../Service/postApartment/post-apartment.service';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import { Post } from '../../models/post.model';
import { FavoritePostService } from '../../Service/favoritePost/favorite-post.service';
import { FavPost } from '../../models/favorite.model';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {

  posts: Post[] = [];
  private sub: any;
  prices = [];
  favoritePosts: FavPost[];
  //define the toogle property
  likestatus : boolean = false ;
  selectedpost:Post;
  public searchPlace: any = '';
  displayedColumns = ['title', 'streetAddress1', 'streetAddress2', 'price'];
  constructor(private postapartmentService: PostApartmentService, private favoritepostService: FavoritePostService, private route: ActivatedRoute,private router: Router){
      }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
        this.searchPlace= params["searchPlace"];
        this.getPostedApartments(this.searchPlace);
    });
  }

  getPostedApartments(searchplace) {
    this.postapartmentService.getPosts()
    .subscribe((data: Post[]) => {
      for(let i = 0; i < data.length; i++){
        console.log(data[i]['city']);
        console.log("searchPlace: "+ this.searchPlace)
        this.prices.push(data[i]['price'])
        if(this.searchPlace.includes(data[i]['city'])){
          console.log("data matched: "+ data[i]['city'])
          this.posts.push(data[i]);
        }
      }
      // console.log('filtered ... '+ this.filteredPosts);
    });
  }

  // selectedfavpost:string = '';
  //define your method for add to favorites
   addRemoveFavorites(favpost){
      //if you just want to toggle the class; change toggle variable.
      // this.selectedfavpost = post.title;
      // console.log(this.selectedfavpost)
      this.likestatus = !this.likestatus;
      if(this.likestatus){

        this.favoritepostService.addFavorites('123',favpost.firstname,favpost.streetAddress1,favpost.streetAddress2,favpost.price)
        .subscribe((data: FavPost[]) => {
          console.log(data);
          this.favoritePosts = data;
          console.log('Data requested ... ');
          console.log(this.favoritePosts);
        });
      }

   }
  viewDetails(post: Post){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "selectedpost": JSON.stringify(post)
      }
    };
    console.log("post ", navigationExtras)
    localStorage.setItem
    this.router.navigate([`/viewApartmentDetails`],navigationExtras);
  }

  editPost(id) {
    this.router.navigate([`/edit/${id}`]);
 }
}

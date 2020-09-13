import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://animationfascination.files.wordpress.com/2014/05/shrek178puss.jpg';
  image3 = 'https://entertainment.time.com/wp-content/uploads/sites/3/2011/08/07_top10timetravelmovies.jpg';

  constructor() { }

  ngOnInit() {
  }

}
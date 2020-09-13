import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favTitle = 'Favorite Links';
  favLinks = ['http://google.com',
              'http://bing.com'];

  constructor() { }

  ngOnInit() {
  }

}

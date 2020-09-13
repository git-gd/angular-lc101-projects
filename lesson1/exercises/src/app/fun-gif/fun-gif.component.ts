import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fun-gif',
  templateUrl: './fun-gif.component.html',
  styleUrls: ['./fun-gif.component.css']
})
export class FunGifComponent implements OnInit {

  funGif = 'https://s17346.pcdn.co/wp-content/uploads/2014/09/animated-GIFs-for-nurses.gif';

  constructor() { }

  ngOnInit() {
  }

}

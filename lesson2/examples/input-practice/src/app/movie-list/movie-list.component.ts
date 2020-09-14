import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

   validMovie = true;

   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string){
      if(!this.movies.includes(newTitle.trim()) && newTitle.trim().length > 0){
         this.movies.push(newTitle.trim());
         this.validMovie = true;
      } else {
         this.validMovie = false;
      }
   }
}
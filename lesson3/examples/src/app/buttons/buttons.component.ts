import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   gold: boolean = false;
   silver: boolean = false;
   copper: boolean = false;

   constructor() { }

   ngOnInit() { }

   toggleButton(btn: string){
      switch (btn) {
         case "gold":
            this.gold = true;
            break;
         case "silver":
            this.silver = true;
            break;
         case "copper":
            this.copper = true;
            break;
         case "reset":
            this.gold = false;
            this.silver = false;
            this.copper = false;
      }
   }

}

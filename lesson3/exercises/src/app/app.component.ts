import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;

  inDanger(rocketImage, nbr){
    // 50000 for temp value.. need parent values to correct
    if (nbr > 50000) {
      rocketImage.style.background = "orange";
    } else {
      rocketImage.style.background = null;
    }
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.message = 'The shuttle has landed.';
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.message = 'Mission aborted';
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    let rocketX = parseInt(rocketImage.style.left);
    let rocketY = parseInt(rocketImage.style.bottom);

    switch (direction) {
      case 'right':
        rocketImage.style.left = rocketX + 10 + 'px';
        this.width += 10000;
        this.inDanger(rocketImage, this.width);
        break;
      case 'left':
        rocketImage.style.left = rocketX - 10 + 'px';
        this.width -= 10000;
        this.inDanger(rocketImage, this.width);
        break;
      case 'up':
        rocketImage.style.bottom = rocketY + 10 + 'px';
        this.height += 10000;
        this.inDanger(rocketImage, this.height);
        break;
      case 'down':
        rocketImage.style.bottom = rocketY - 10 + 'px';
        this.height -= 10000;
        this.inDanger(rocketImage, this.height);
        break;          
      }
  }
}

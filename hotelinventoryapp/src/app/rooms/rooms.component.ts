import { Component } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = 'Hotel Taj';

  numberOfRooms = 10;

  hideRooms = true;
  hideRoomswithng = true;

  rooms : Room = {
    totalRoom:0,
    availableRoom:5,
    bookedRoom:0,
  }

  openToggle() {
     this.hideRooms = !this.hideRooms;
    
  }

  Toggle() {

    this.hideRoomswithng = !this.hideRoomswithng;
 }
  constructor() { }


}

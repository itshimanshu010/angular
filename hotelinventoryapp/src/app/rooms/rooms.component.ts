import { Component } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = 'Hotel Taj';

  numberOfRooms = 10;

  hideRooms = true;
  hideRoomswithng = false;

  rooms : Room = {
      totalRoom:10,
    availableRoom:5,
    bookedRoom:5,
  }

  roomList : RoomList[] = [ {
    roomNumber: 1,
    roomType: 'Deluxe',
    amenities: 'TV, AC, Wifi',
    price: 5000,
    photo: 'assets/deluxe.jpg',
    checkInTime: new Date('2021-07-01'),
    checkOutTime: new Date('2021-07-02')

  },
  { 
    roomNumber: 2,
    roomType: 'Standard', 
    amenities: 'TV, AC, Wifi',
    price: 3000,
    photo: 'assets/standard.jpg', 
    checkInTime: new Date('2021-07-01'),
    checkOutTime: new Date('2021-07-02')
  },
  { 
    roomNumber: 3,
    roomType: 'Suite',
    amenities: 'TV, AC, Wifi',
    price: 7000,
    photo: 'assets/suite.jpg',
    checkInTime: new Date('2021-07-01'),    
    checkOutTime: new Date('2021-07-02')
  }]



  openToggle() {
     this.hideRooms = !this.hideRooms;
    
  }

  Toggle() {

    this.hideRoomswithng = !this.hideRoomswithng;
 }
  constructor() { }


}

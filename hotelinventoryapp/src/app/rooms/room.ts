// export interface Room{
//     totalRoom?: number;
//     availableRoom?: number;
//     bookedRoom?: number;
// }

export interface Room{
    totalRoom: number;
    availableRoom: number;
    bookedRoom: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photo: string;
    checkInTime: Date;
    checkOutTime: Date;

}
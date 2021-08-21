import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  deleteRoom(id: number) {
    throw new Error('Method not implemented.');
  }
  getRoomList(): import("rxjs").Observable<import("./room").Room[]> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

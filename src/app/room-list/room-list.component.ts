import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { RoomService } from '../room.service';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms!: Observable<Room[]>;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomList();
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
      
    );
  }

  roomDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  
  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }
}

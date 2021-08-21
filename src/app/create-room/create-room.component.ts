import { Component, OnInit, ɵRender3ComponentFactory } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submitted = false;

  constructor(private roomService: RoomService, private  router: Router) { }

  ngOnInit(): void {
  }

  newRoom(): void {
    this.submitted =  false;
    this.room = new Room();
  }

  save() {
    this.roomService.createRoom(this.room)
    .subscribe(
      data => {
        console.log(data),
        
        this.room = new Room();
        this.gotoList();
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rooms'])
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {


  content : string;
  constructor(private UserService : UserService) { }

  ngOnInit(): void {
    this.UserService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  }
}

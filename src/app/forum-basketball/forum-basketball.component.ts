import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-basketball',
  templateUrl: './forum-basketball.component.html',
  styleUrls: ['./forum-basketball.component.css']
})
export class ForumBasketballComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.activeNavBar();
  }

  activeNavBar(){
    document.getElementById("home").className = "unactive";
    document.getElementById("football").className = "unactive";
    document.getElementById("basketball").className = "unactive";
    document.getElementById("volleyball").className = "unactive";
    document.getElementById("forum").className = "active";
    if(document.body.contains(document.getElementById("register")))
    document.getElementById("register").className = "unactive";
    if(document.body.contains(document.getElementById("login")))
    document.getElementById("login").className = "unactive";
    if(document.body.contains(document.getElementById("profile")))
    document.getElementById("profile").className = "unactive";
  }
}

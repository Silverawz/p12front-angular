import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-football',
  templateUrl: './forum-football.component.html',
  styleUrls: ['./forum-football.component.css']
})
export class ForumFootballComponent implements OnInit {

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

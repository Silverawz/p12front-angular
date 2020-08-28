import { Component, OnInit } from '@angular/core';
import { SportService } from '../_services/sport.service';
import { Article } from '../classes/article';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  constructor(private sportService: SportService) { }
  errorMessage = '';
  articles: Article[];

  ngOnInit() {
    this.activeNavBar();
    this.sportService.getPublicFootballArticle().subscribe(
      data => {
        this.articles = data;
      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    );
  }

  activeNavBar(){
    document.getElementById("home").className = "unactive";
    document.getElementById("football").className = "active";
    document.getElementById("basketball").className = "unactive";
    document.getElementById("volleyball").className = "unactive";
    if(document.body.contains(document.getElementById("register")))
    document.getElementById("register").className = "unactive";
    if(document.body.contains(document.getElementById("login")))
    document.getElementById("login").className = "unactive";
    if(document.body.contains(document.getElementById("profile")))
    document.getElementById("profile").className = "unactive";
  }
}

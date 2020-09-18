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
  size:number=3;
  currentPage:number=0;
  totalPages:number;
  pages:Array<number>;

  ngOnInit() {
    this.activeNavBar();
    this.getArticles();
  }

  getArticles(){
    this.sportService.getPublicFootballArticle(this.currentPage, this.size).subscribe(
      data => {    
        this.totalPages = data.totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.articles = data.content;
      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    );
  }

  onPageArticle(i){
    this.currentPage=i;
    this.getArticles();
  }

  activeNavBar(){
    document.getElementById("home").className = "unactive";
    document.getElementById("football").className = "active";
    document.getElementById("basketball").className = "unactive";
    document.getElementById("volleyball").className = "unactive";
    document.getElementById("forum").className = "unactive";
    if(document.body.contains(document.getElementById("register")))
    document.getElementById("register").className = "unactive";
    if(document.body.contains(document.getElementById("login")))
    document.getElementById("login").className = "unactive";
    if(document.body.contains(document.getElementById("profile")))
    document.getElementById("profile").className = "unactive";
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Article } from '../classes/article';
@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content = '';
  currentUser: any;
  articles: Article[];
  size:number=10;
  currentPage:number=0;
  totalPages:number;
  pages:Array<number>;

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit() {
    this.activeNavBar();
    this.currentUser = this.token.getUser(); 
    this.getArticles();  
  }

  getArticles(){
    if(!document.body.contains(document.getElementById("profile"))){
      this.content = 'You must be logged in to access this page.';
      document.getElementById('btn-profil').style.visibility = 'hidden';
    } else{
      this.userService.getModeratorBoard(this.currentPage, this.size).subscribe(
        data => {
          this.totalPages = data.totalPages;
          this.pages = new Array<number>(this.totalPages);
          this.articles = data.content;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      );
    }
  }

  onPageArticle(i){
    this.currentPage=i;
    this.getArticles();
  }

  activeNavBar(){
    document.getElementById("home").className = "unactive";
    document.getElementById("football").className = "unactive";
    document.getElementById("basketball").className = "unactive";
    document.getElementById("volleyball").className = "unactive";
    if(document.body.contains(document.getElementById("register")))
    document.getElementById("register").className = "unactive";
    if(document.body.contains(document.getElementById("login")))
    document.getElementById("login").className = "unactive";
    if(document.body.contains(document.getElementById("profile")))
    document.getElementById("profile").className = "active";
  }
}

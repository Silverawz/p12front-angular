import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Article } from '../classes/article';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { SportService } from '../_services/sport.service';
import { Categories } from '../classes/categories';


@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content = '';
  currentUser: any;
  articles: Article[];
  singleArticle: Article;
  size:number=2;
  currentPage:number=0;
  totalPages:number;
  pages:Array<number>;
  validateUpdated:boolean=false;
  categoriesName: Categories[];
  categoriesFromSingleArticle: Categories[];
  articleIsActive:boolean;
  messageInputError:boolean=false;
  titleInputError:boolean=false;

  constructor(private userService: UserService, private token: TokenStorageService, private sportService: SportService) { }

  ngOnInit() {
    this.content = '';
    this.validateUpdated = false;
    this.activeNavBar();
    this.currentUser = this.token.getUser(); 
    this.getArticles();  
    this.hideFormChangeArticle();
    if(document.body.contains(document.getElementById("btn-return-list-own-articles"))){
      document.getElementById('btn-return-list-own-articles').style.visibility = 'hidden';
    }
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

  updateArticle(){
    this.singleArticle.active = this.articleIsActive;
    this.content = ''; this.messageInputError=false; this.titleInputError=false;
    let validationOfUpdate : boolean  = true;
    if(!this.checkSizeOfTextArticle(5, 1000, this.singleArticle.message)) {
      this.messageInputError=true;
      this.content = 'error_message_failed_to_update_article';
      validationOfUpdate=false;
    }
    if(!this.checkSizeOfTextArticle(5, 70, this.singleArticle.title)){
      this.titleInputError=true;
      this.content = 'error_message_failed_to_update_article';
      validationOfUpdate=false;
    }
    if(this.singleArticle.categories.length < 1){
      this.content = 'error_message_failed_to_update_article';
      validationOfUpdate=false;
    }
    if(validationOfUpdate){
      this.sportService.updateArticle(this.singleArticle).subscribe(
        data => {
          this.validateUpdated = true;
          this.hideFormChangeArticle();
        },
        err => {
          this.content = 'error_message_failed_to_update_article';
          this.content = JSON.parse(err.error).message;
        }
      )
    }
  }

  checkSizeOfTextArticle(minSize:number, maxSize:number, subject:String){
    if(subject == null){
      return false;
    }else if(subject.length < minSize || subject.length > maxSize){
      return false;
    } else
    return true;
  }



  reloadPage(){
    window.location.reload();
  }

  onPageArticle(i){
    this.currentPage=i;
    this.getArticles();
  }

  changeArticle(id){
    this.validateUpdated = false;
    document.getElementById('content_articles').style.display = "none";
    document.getElementById('title_list').style.display = "none";
    document.getElementById('page_number').style.display = "none";
    document.getElementById('create_article_btn').style.display = "none";
    document.getElementById('btn-return-list-own-articles').style.visibility = 'visible';
    this.showFormChangeArticle();
    this.sportService.getPrivateArticleForUser(id).subscribe(
      data => {
        this.singleArticle = data;
        this.articleIsActive = this.singleArticle.active;
      },
      err => {
        this.content = err.error.message;
      }
    )
    // recupere la liste des categories via API
    this.sportService.getAllCategoriesName().subscribe(
      data => {
        this.categoriesName = data;
      },
      err => {
        this.content = err.error.message;
      }
    )
  }

  validateCategory(Categories){
      for(let j =0; j < this.singleArticle.categories.length; j++){
        if(this.singleArticle.categories[j].description == Categories.description){
          return true;
        }
      }
      return false;   
  }

  removeCategory(Categories){
    A : for(let j =0; j < this.singleArticle.categories.length; j++){
      if(this.singleArticle.categories[j].description == Categories.description){
        this.singleArticle.categories =  this.singleArticle.categories.filter(obj => obj !== this.singleArticle.categories[j]);
        break A;
      }
    }
  }

  addCategory(Categories){
    var lengthArray = this.singleArticle.categories.length;
    A : for(let j =0; j < lengthArray; j++){
      if(this.singleArticle.categories[j].description == Categories.description){
        break A;
      } else if (j = lengthArray - 1){
        this.singleArticle.categories.push(Categories);
      }
    }
    if(lengthArray == 0){
      this.singleArticle.categories.push(Categories);
    }
    if(lengthArray == 1 && this.singleArticle.categories[0].description != Categories.description){
      this.singleArticle.categories.push(Categories);
    }
  }

  isActive(){
    if(this.articleIsActive){
      return true;
    }
      return false;  
  }

  change_article_active(){
    if(this.articleIsActive){
      this.articleIsActive = false;
    } else {
      this.articleIsActive = true;
    }
  }

  hideFormChangeArticle(){
    if(document.body.contains(document.getElementById("col-md-6")))
    document.getElementById('col-md-6').style.display = "none";
  }

  showFormChangeArticle(){
    if(document.body.contains(document.getElementById("col-md-6")))
    document.getElementById('col-md-6').style.display = "initial";
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

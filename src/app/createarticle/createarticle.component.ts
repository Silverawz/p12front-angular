import { Component, OnInit } from '@angular/core';
import { SportService } from '../_services/sport.service';
import { Categories } from '../classes/categories';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Article } from '../classes/article';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  categoriesName: Categories[];
  categories : Categories[] = new Array;
  articleIsActive:boolean;
  messageInputError:boolean=false;
  titleInputError:boolean=false;
  content = '';
  currentUser: any;
  validateCreate:boolean=false;
  singleArticle: Article;

  constructor(private userService: UserService, private token: TokenStorageService, private sportService: SportService) { }

  ngOnInit(): void {
    this.content = '';
    this.validateCreate = false;
    this.activeNavBar();
    this.getCategoriesName();
    this.currentUser = this.token.getUser();
    this.articleIsActive = true;
    this.categories.push(new Categories(1, 'placeholderToRemove'));
    this.singleArticle = new Article(null, null, null, null, true, null, this.categories);
  }

  getCategoriesName(){
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
    if(this.singleArticle.categories == null){
      return false;
    } else{
        var lengthArray = this.singleArticle.categories.length;
      A : for(let j =0; j < lengthArray; j++){
        if(Categories.description == this.singleArticle.categories[j].description){
          return true;
          break A;
        }
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
    if(this.singleArticle.categories == null){
      this.singleArticle.categories.push(Categories);
    }
    var lengthArray = this.singleArticle.categories.length;
    A : for(let j =0; j < lengthArray; j++){
      if(this.singleArticle.categories[j].description == Categories.description){
        break A;
      } else if (j = lengthArray - 1){
        this.singleArticle.categories.push(Categories);
      }
    }
    if(lengthArray == 1 && this.singleArticle.categories[0].description != Categories.description){
      this.singleArticle.categories.push(Categories);
    }
  }

  change_article_active(){
    if(this.articleIsActive){
      this.articleIsActive = false;
    } else {
      this.articleIsActive = true;
    }
  }

  isActive(){
    if(this.articleIsActive){
      return true;
    }
      return false;
  } 

  createArticle(){
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
    if(this.singleArticle.categories.length < 2){
      this.content = 'error_message_failed_to_update_article';
      validationOfUpdate=false;
    }
    if(validationOfUpdate){
      this.singleArticle.categories.forEach(element => {
        if(element.description == 'placeholderToRemove'){
          this.singleArticle.categories = this.singleArticle.categories.filter(obj => obj !== element);
        }
      });
      this.sportService.createArticle(this.singleArticle).subscribe(
        data => {
          this.validateCreate = true;
          this.hideCreateArticleForm();
        },
        err => {
          this.singleArticle.categories.push(new Categories(1, 'placeholderToRemove'));
          this.content = 'error_message_failed_to_update_article';
          this.content = err.error.message;
        }
      )
    }

  }

  hideCreateArticleForm(){
    if(document.body.contains(document.getElementById("create_article")))
    document.getElementById('create_article').style.display = "none";
  }

  checkSizeOfTextArticle(minSize:number, maxSize:number, subject:String){
    if(subject == null){
      return false;
    } else if (subject.length < minSize || subject.length > maxSize){
      return false;
    } else
    return true;
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

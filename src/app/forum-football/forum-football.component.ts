import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Topic } from '../classes/topic';
import { Post } from '../classes/post';
import { ForumService } from '../_services/forum.service';

@Component({
  selector: 'app-forum-football',
  templateUrl: './forum-football.component.html',
  styleUrls: ['./forum-football.component.css']
})
export class ForumFootballComponent implements OnInit {

  currentUser: any;
  errorMessage = '';
  topics: Topic[];
  posts:Post[];
  size:number=5;
  currentPage:number=0;
  totalPages:number;
  pages:Array<number>;
  category:string;
  active:string;
  inATopicView:boolean;
  currentTopicId:number;
  search:string;
  sizeError:boolean;
  constructor(private token: TokenStorageService, private forumService: ForumService) { }

  ngOnInit(): void {
    this.activeNavBar();
    this.inATopicView = false;
    this.search = "";
    this.category = "Football";
    this.active = "true";
    this.sizeError = false;
    this.getTopics();
    this.currentTopicId = null;
    this.currentUser = this.token.getUser();
    if(this.currentUser  != null) {

    }
  }


  getTopics(){
    this.forumService.getFootballTopics(this.currentPage, this.size, this.category, this.active, this.search).subscribe(
      data => {    
        this.totalPages = data.totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.topics = data.content;
        this.currentTopicId = null;
      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    )
  }

  getPostsFromTopic(id_topic, current_Page){ 
    this.currentPage = current_Page;
    this.sizeError = false;
    this.forumService.getFootBallPosts(this.currentPage, this.size, id_topic).subscribe(
      data => {    
        this.totalPages = data.totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.posts = data.content;
        this.inATopicView = true;
        this.currentTopicId = id_topic;
      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    )
  }


  reloadPage(){
    window.location.reload();
  }

  onPageTopics(i){
    this.currentPage=i;
    this.getTopics();
  }

  onPagePosts(i){
    this.currentPage=i;
    this.getPostsFromTopic(this.currentTopicId, i);
  }

  search_(){
    var inputValue = (<HTMLInputElement>document.getElementById("search-input")).value;
    if(inputValue.length > 15){
      this.sizeError = true;
      this.getTopics();
    } else{
      this.sizeError = false;
      this.search = inputValue;
      this.getTopics();
    }
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

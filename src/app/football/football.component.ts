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
  content = '';
  articles: Article[];

  ngOnInit() {
    this.sportService.getPublicFootballArticle().subscribe(
      data => {
        this.articles = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}

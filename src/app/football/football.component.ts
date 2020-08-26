import { Component, OnInit } from '@angular/core';
import { SportService } from '../_services/sport.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  constructor(private sportService: SportService) { }
  content = '';

  ngOnInit() {
    console.log('inside football');
    this.sportService.getPublicFootballArticle().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}

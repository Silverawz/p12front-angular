import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from "../classes/article";

const API_URL = 'http://localhost:8080/api/sport/';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }

  getPublicFootballArticle(page:number, size:number): Observable<any> {
    return this.http.get(API_URL + 'football/test?page='+page+'&size='+size);
  }

  getPublicVolleyballArticle(): Observable<any> {
    return this.http.get<Article[]>(API_URL + 'volleyball/active');
  }

  getPublicBasketballArticle(): Observable<any> {
    return this.http.get<Article[]>(API_URL + 'basketball/active');
  }
}

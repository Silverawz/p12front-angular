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
    return this.http.get(API_URL + 'football/active?page='+page+'&size='+size);
  }

  getPublicVolleyballArticle(page:number, size:number): Observable<any> {
    return this.http.get(API_URL + 'volleyball/active?page='+page+'&size='+size);
  }

  getPublicBasketballArticle(page:number, size:number): Observable<any> {
    return this.http.get(API_URL + 'basketball/active?page='+page+'&size='+size);
  }

  getPrivateArticleForUser(article_id:number): Observable<any>{
    return this.http.get(API_URL + 'article?id='+article_id);
  }

  updateArticle(article:Article):Observable<any>{
    return this.http.put('http://localhost:8080/api/sport/article', article);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/forum/';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getFootballTopics(page:number, size:number, category:string, active:string, titleContains:string): Observable<any> {
    return this.http.get(API_URL + 'topics/?page='+page+'&size='+size+'&category='+category+'&active='+active+'&titleContains='+titleContains);
  }

  getFootBallPosts(page:number, size:number, id_topic:number): Observable<any> {
    return this.http.get(API_URL + 'posts/?page='+page+'&size='+size+'&id_topic='+id_topic);
  }
}

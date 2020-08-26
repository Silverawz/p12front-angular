import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/sport/';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }

  getPublicFootballArticle(): Observable<any> {
    return this.http.get(API_URL + 'football/active', { responseType: 'text'});
  }
}

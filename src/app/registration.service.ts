import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login", user);
  }

  public registerUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/register", user);
  }

  public generateToken(request){
    return this._http.post<any>("http://localhost:8080/authenticate", request,{responseType: 'text' as 'json'});
  }

  public welcome(token){
    let tokenStr='Bearer '+token;
    const headers = new HttpHeaders().set("Authorization", tokenStr)
    return this._http.get<any>("http://localhost:8080/test",{headers, responseType:'text' as 'json'});
  }
}

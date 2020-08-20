import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any={
    "email" : "aaa@aol.fr",
    "password" : "$2a$10$DkYOrk3CBKBiBzEDeVGUIezUGdnGyFyp5GdE1q/I41P.ksJoIKkaK"
  };
  response:any;

  constructor(private service:RegistrationService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let resp = this.service.generateToken(authRequest);
    resp.subscribe(data=>this.accessApi(data));
  }

  public accessApi(token){
    let resp=this.service.welcome(token);
    resp.subscribe(data=>this.response=data)
  }
}

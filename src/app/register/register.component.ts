import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSucessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSucessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true;
      }
    )
  }
}

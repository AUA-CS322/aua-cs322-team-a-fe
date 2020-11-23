import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isSubmitted = false;
  isError = false;

  public submit(e) {
    e.preventDefault();
    this.isSubmitted = true;
    this.authService.login(this.signForm.getRawValue().username, this.signForm.getRawValue().password)
          .subscribe(
            (data:any)=>{
              this.isError = !data.body;
              if(data.body)
              {console.log("success");}
              else{console.log("error")}
            },
            (e)=>{
              this.isError = true;
              console.log(e)}
        )
  }

  //getters
  get username() {
    return this.signForm.get('username');
  }
  
  get isWrongError(){
    return this.isSubmitted && this.isError;
  }
}

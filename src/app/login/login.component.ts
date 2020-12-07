import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted = false;
  isError = false;

  signForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public submit(e) {
    e?.preventDefault();
    this.isSubmitted = true;
    this.authService.login(this.signForm.getRawValue().username, this.signForm.getRawValue().password)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.isError = !data.token;
          if (data.token) {
            localStorage.setItem('token', data.body);
            this.router.navigate(['/profile']);
            console.log('success');
          } else {
            console.log('error');
          }
          this.wrongError.emit(this.isWrongError);
        },
        (error) => {
          this.isError = true;
          console.log(error);
          this.wrongError.emit(this.isWrongError);
        }
      );
  }

  // getters
  get username() {
    return this.signForm.get('username');
  }

  get isWrongError() {
    return this.isSubmitted && this.isError;
  }

  public setFieldValues(usernameNew, passwordNew){
    this.signForm.patchValue({
      username:usernameNew,
      password : passwordNew
    }
    );
  }

  @Output() wrongError = new EventEmitter<boolean>();
}

import {Component, OnInit} from '@angular/core';
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
    e.preventDefault();
    this.isSubmitted = true;
    this.authService.login(this.signForm.getRawValue().username, this.signForm.getRawValue().password)
      .subscribe(
        (data: any) => {
          this.isError = !data.body;
          if (data.body) {
            localStorage.setItem('token', data.body);
            this.router.navigate(['/profile']);
            console.log('success');
          } else {
            console.log('error');
          }
        },
        (error) => {
          this.isError = true;
          console.log(error);
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
}

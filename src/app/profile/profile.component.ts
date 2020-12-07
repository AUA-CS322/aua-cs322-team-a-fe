import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData;
  isReady: boolean;
  username: string;
  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.isReady = false;
      this.username = paramMap.get('username');
      if (this.username){
        this.usersService.getUserById(this.username).subscribe((data: any) => {
          this.userData = data;
          this.isReady = true;
        });
      } else {
        this.usersService.getUser().subscribe((data: any) => {
          this.userData = data;
          this.isReady = true;
        });
      }
    });
  }
}

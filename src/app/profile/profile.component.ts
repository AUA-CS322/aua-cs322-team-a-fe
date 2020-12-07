import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData;
  isReady: boolean;
  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.isReady = false;
    this.route.paramMap.subscribe(paramMap => {
      const username = paramMap.get('username');
      if (username){
        this.usersService.getUserById(username).subscribe((data: any) => {
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

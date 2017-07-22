import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login(event, user: any) {
    this.user = user;
    this.userService.fetchLogin(this.user);
  }
}

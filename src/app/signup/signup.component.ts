import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  addUser(username: string, password: string)
  {
    this.userService.addUser(username,password);
  }

}

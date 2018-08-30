import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
  }

  addUser(username: string, password: string)
  {
    this.userService.addUser(username,password);
    this.router.navigate(['']);
  }

}

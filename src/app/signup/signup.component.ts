import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

<<<<<<< HEAD
  constructor(private userService: UserService, private router: Router){}
=======
  constructor(private userService: UserService, private router: Router) {}
>>>>>>> 9874b3feba2ab5274af354a24c0063be2a4acc03

  ngOnInit() {
  }

  addUser(username: string, password: string)
  {
    this.userService.addUser(username,password);
    this.router.navigate(['']);
  }

}

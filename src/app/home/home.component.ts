import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { Chat, Message } from '../models/chat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ChatService]
})
export class HomeComponent implements OnInit {
  users;
  chat;
  messages: Message[];
  user;
  chatKey: string = "0";

  constructor(private userService: UserService, private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
    //   this.users = dataLastEmittedFromObserver;
    // });
    this.users = this.userService.getUsers();
    this.chat = this.chatService.getChatByKey(this.chatKey);
    this.user = this.userService.getCurrentUser();
    this.chat.subscribe(content => {
      this.messages = content.messages;
    });
  }

  getName(userKey: string) {

  }

  sentText(message: string) {
    let newMessage: Message = new Message(message, this.user.$key);
    console.log(newMessage);
  }

  logOut() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
    this.router.navigate(['']);
  }
}

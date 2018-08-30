import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { User } from '../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { Chat, Message } from '../models/chat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css','./home.component.css'],
  providers: [ChatService]
})
export class HomeComponent implements OnInit {
  users: User[];
  chat;
  messages: Message[];
  user: User;
  chatKey: string = "0";
  userNamePair;
  userKeyPair;
  currentUserKey: string;
  @ViewChild('chat-list') private myScrollContainer: ElementRef;

  constructor(private userService: UserService, private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(content => {
      this.users = content;
      this.userNamePair = new Map();
      this.userKeyPair = new Map();
      content.forEach(user => {
        this.userNamePair.set(user.$key, user.username);
        this.userKeyPair.set(user.username, user.$key);
      })
    });
    this.user = this.userService.getCurrentUser();
    this.chat = this.chatService.getChatByKey(this.chatKey);
    this.user = this.userService.getCurrentUser();
    this.chat.subscribe(content => {
      console.log(content.messages);
      // for (let key in content.messages) {
      //   console.log(key + content.messages[key]);
      //   this.messages.push({key: key, value: value[key]})
      // }
      this.messages = content.messages;
      // console.log(this.messages);
    });
    this.scrollToBottom();
  }

  getName(userKey: string) {
    return this.userNamePair.get(userKey);
  }

  messageClass(userKey: string){
    if(this.userService.currentUserKey === userKey) {
      return "my-message";
    } else {
      return "other-message";
    }
  }

  sendText(message: string) {
    // this.currentUserKey = this.userKeyPair.get(this.user.username);
    let newMessage: Message = new Message(message, this.userService.currentUserKey);
    this.chatService.addMessage(this.chatKey, newMessage);
    this.scrollToBottom();
  }

  logOut() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
    this.router.navigate(['']);
  }

  scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }
}

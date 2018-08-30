import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Message } from './../models/chat';


@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.chats = database.list('chats');
  }

  getChats() {
    return this.chats;
  }

  getChatByKey(chatKey: string) {
    return this.database.object('chats/' + chatKey);
  }

  addMessage(chatKey: string, message: Message) {
    this.database.list('/chats/' + chatKey + '/messages/').push(message);
  }
}

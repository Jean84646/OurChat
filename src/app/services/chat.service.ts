import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


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
}

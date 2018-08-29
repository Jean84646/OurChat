export class Chat {
  constructor(public message: Message[], public user: string[]) { }
}

export class Message {
  constructor(public message: string, public user: string) { }
}

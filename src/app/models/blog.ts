export class Blog
{
  posts: Post[];
  constructor () {
    this.posts = [];
  }

  addPost(description: string, picture: string = "")
  {
    this.posts.push(new Post(description, picture));
  }
}

export class Post
{
  time: string;
  constructor(public description: string, public picture: string){
    this.time = new Date().toString();
  }
}

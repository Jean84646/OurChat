export class Blog
{
  constructor (public posts: Post[]) {}

  addPost(description, picture)
  {
    this.posts.push(new Post(description, picture));
  }
}

export class Post
{
  time;
  constructor(public description: string, public picture: string){
    this.time = new Date();
  }
}

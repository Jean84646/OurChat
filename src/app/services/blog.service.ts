import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Blog, Post } from '../models/blog';

@Injectable()
export class BlogService {
  blogs: FirebaseListObservable<Blog[]>;
  lastInstertedBlogKey: string;

  constructor(private database: AngularFireDatabase) {
    this.blogs = database.list('blogs');
  }

  getBlogs(){
    return this.blogs;
  }

  //depreceated addBlogs via user.services on new user creation
  addBlog(newBlog: Blog) {
    this.lastInstertedBlogKey = this.blogs.push(newBlog).key;
  }

  getBlogByKey(blogKey: string)
  {
    let newPosts = [];
    let blogToDisplay = new Blog();
    let foundBlog = this.database.list('/blogs/' + blogKey);
    foundBlog.subscribe(returnedBlog => {
      blogToDisplay = returnedBlog[0];
      for(var post in blogToDisplay)
      {
        let tempPost = blogToDisplay[post];
        newPosts.push(tempPost);
      }
    });
    return newPosts.reverse();
  }

  addPostToBlog(blogKey: string, description: string, picture: string = "")
  {
    let newPost = new Post(description,picture);
    this.database.list('/blogs/' + blogKey + '/posts/').push(newPost);
  }

}

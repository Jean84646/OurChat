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

  getBlogByKey(blogKey: string){
    return this.database.object('/blogs/' + blogKey);
  }

}

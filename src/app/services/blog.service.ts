import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Blog, Post } from '../models/blog';

@Injectable()
export class BlogService {
  blogs: FirebaseListObservable<Blog[]>;

  constructor(private database: AngularFireDatabase) {
    this.blogs = database.list('blogs');
  }

  getBlogs(){
    return this.blogs;
  }

  addBlog(newBlog: Blog) {
    this.blogs.push(newBlog);
  }

  getBlogByKey(blogKey: string){
    return this.database.object('/blogs/' + blogKey);
  }

}

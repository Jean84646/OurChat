import { Component, OnInit } from '@angular/core';
import { Blog, Post } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit
{
  blogKey: string;
  blogToDisplay: Blog;
  posts: Post[];
  currentUser: User;


  constructor(private blogService: BlogService, private userService: UserService) { }

  ngOnInit()
  {
    this.currentUser = this.userService.getCurrentUser();
    this.blogKey = this.currentUser.blogKey;
    var foundBlog = this.blogService.getBlogByKey(this.blogKey);
    foundBlog.subscribe(returnedBlog => {
     this.blogToDisplay = returnedBlog;
     this.posts = this.blogToDisplay.posts;
   });
  }

  addBlog()
  {
    var newBlog = new Blog();
    newBlog.addPost('test description');
    console.log(newBlog);
    this.blogService.addBlog(newBlog);
    console.log(this.blogService.lastInstertedBlogKey);
  }

  timeSince(postTime: string)
  {
    console.log(postTime);
    let lastPostTime = new Date(postTime).getTime();
    console.log(lastPostTime);
    let diffInTime = Math.floor((Date.now() - lastPostTime)/60000);
    return diffInTime;
  }

}

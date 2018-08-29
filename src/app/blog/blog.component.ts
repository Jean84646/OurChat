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

  // addBlog()
  // {
  //   var newBlog = new Blog();
  //   newBlog.addPost('test description');
  //   this.blogService.addBlog(newBlog);
  // }

  timeSince(postTime: string)
  {
    let lastPostTime = new Date(postTime).getTime();
    let timeInMinutes = Math.floor((Date.now() - lastPostTime)/60000);
    let timeInHours = Math.floor(timeInMinutes/60);
    let timeInDays = Math.floor(timeInHours/24);
    if(timeInDays > 1)
    {
      return timeInDays + " " + "days";
    }
    else if(timeInDays === 1)
    {
      return timeInDays + " " + "day";
    }
    else if(timeInHours > 1)
    {
      return timeInHours + " " + "hours";
    }
    else if(timeInHours === 1)
    {
      return timeInHours + " " + "hour";
    }
    else if(timeInMinutes > 1)
    {
      return timeInMinutes + " " + "minutes";
    }
    else if(timeInMinutes === 1)
    {
      return timeInHours + " " + "minute";
    }
    return "less than a minute";
  }

}

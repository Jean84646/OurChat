import { Component, OnInit } from '@angular/core';
import { Blog, Post } from '../models/blog';
import { BlogService } from '../services/blog.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['../app.component.css','./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit
{
  blogKey: string;
  posts: Post[];
  currentUser: User;
  contactKeys: string[];

  constructor(private blogService: BlogService, private userService: UserService, private router: Router) { }

  ngOnInit()
  {
    this.currentUser = this.userService.getCurrentUser();
    this.blogKey = this.currentUser.blogKey;
    this.refreshBlog();
  }

  addPost(description: string, img: string)
  {
    this.blogService.addPostToBlog(this.blogKey,description,img);
    this.refreshBlog();
  }

  refreshBlog()
  {
    let tempPosts = [];
    let contactKeys = this.userService.getContactKeys();
    let blogKeys = [];
    blogKeys.push(this.blogKey);
    contactKeys.forEach(key => {
      blogKeys.push(this.userService.getBlogKey(key));
    })
    blogKeys.forEach(individualBlogKey => {
      let blog = this.blogService.getBlogByKey(individualBlogKey);
      setTimeout(function(){
        for(let i = 0; i < blog.length;i++)
        {
          tempPosts.push(blog[i]);
        }
      },200);//make proper async Promise later
    });

    setTimeout(function(){
      tempPosts.sort(function(a,b){
        return Date.parse(b.time) - Date.parse(a.time);
      });
      console.log(tempPosts);

    },400);
    this.posts = tempPosts;
  }

  showImg(imgUrl: string)
  {
    return (imgUrl != "");
  }

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

  logOut() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
    this.router.navigate(['']);
  }

}

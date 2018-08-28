import { Component, OnInit } from '@angular/core';
import { Blog, Post } from '../models/blog';
import { BlogService } from '../blog.service';
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

  constructor(private blogService: BlogService) { }

  ngOnInit()
  {
    this.blogKey = "0";
    var foundBlog = this.blogService.getBlogByKey(this.blogKey);
    foundBlog.subscribe(returnedBlog => {
     this.blogToDisplay = returnedBlog;
     this.posts = this.blogToDisplay.posts;
   });
  }

}

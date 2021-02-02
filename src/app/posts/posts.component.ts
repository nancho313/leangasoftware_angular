import { Component, OnInit } from '@angular/core';
import { Post } from './shared/model/post.model';
import { PostsService } from './shared/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts:Post[] = []

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {

    this.postsService.getPosts().subscribe({next: (posts:Post[])=>{
      
      this.posts = posts;
    }});
  }

  areTherePosts():boolean {

    return this.posts && this.posts.length > 0;
  }

  getDetailPath(post:Post):string {

    return `/posts/${post.id}`;
  }

}

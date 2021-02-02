import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/model/post.model';
import { PostsService } from '../shared/service/posts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post: Post = null;
  lastCommentDate: Date = null;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let id: number = this.activatedRoute.snapshot.params["id"];
    this.postsService.getPostById(id).subscribe({
      next: (post: Post) => {

        this.post = post;
      }
    });
  }

  existsPost(): boolean {

    return this.post !== null;
  }

  changeLastCommentDate(lastCommentDate: Date) {

    this.lastCommentDate = lastCommentDate;
  }

  existsLastCommentDate(): boolean {

    return this.lastCommentDate !== null;
  }

  getLastCommentDate(): string {

    return this.lastCommentDate ? this.lastCommentDate.toISOString() : "";
  }

}
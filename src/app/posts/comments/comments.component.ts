import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../shared/model/comment.model';
import { PostsService } from '../shared/service/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postId:number;
  @Output() showLastCommentDate:EventEmitter<Date> = new EventEmitter<Date>();  
  comments:Comment[] = [];

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {

    if(this.postId){

      this.postsService.getPostComments(this.postId).subscribe({
        next: (comments:Comment[])=>{

          this.comments = comments;
        }
      })
    }
  }

  areThereComments():boolean {

    return this.comments && this.comments.length > 0;
  }

  showNewLastCommentDate(){

    this.showLastCommentDate.emit(new Date());
  }
}

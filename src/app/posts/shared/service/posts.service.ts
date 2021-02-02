import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Comment } from "../model/comment.model";
import { Post } from "../model/post.model";

const API_URL = environment.api;
const POSTS_RESOURCE = environment.resources.posts;
const COMMENTS_RESOURCE = environment.resources.comments;
@Injectable()
export class PostsService {

    constructor(private httpClient: HttpClient) {

    }

    getPosts():Observable<Post[]>{

        let url:string = `${API_URL}${POSTS_RESOURCE}`
        return this.httpClient.get<Post[]>(url);
    }

    getPostById(id:number):Observable<Post>{

        let url:string = `${API_URL}${POSTS_RESOURCE}/${id}`
        return this.httpClient.get<Post>(url);
    }

    getPostComments(postId:number):Observable<Comment[]>{

        let url:string = `${API_URL}${COMMENTS_RESOURCE}`;
        let searchParams: URLSearchParams = new URLSearchParams();
        searchParams.append('postId', postId.toString());
        url = url.concat('?').concat(searchParams.toString());
        return this.httpClient.get<Comment[]>(url);
    }
}
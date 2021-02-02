import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { DetailComponent } from './posts/detail/detail.component';
import { Page404Component } from './page404/page404.component';
import { PostsService } from './posts/shared/service/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './posts/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailComponent,
    Page404Component,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

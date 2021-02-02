import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { DetailComponent } from './posts/detail/detail.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  
  { path: 'posts', component: PostsComponent},  
  { path: 'posts/:id', component: DetailComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', component: Page404Component }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

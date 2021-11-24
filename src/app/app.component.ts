import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

posts: Post[] = [
  {title: 'Angular JS', text: 'Post text', id: 1},
  // {title: 'Angular JS 2', text: 'Post text 2', id: 2},
];

updatePosts(post: Post) {
  this.posts.unshift(post);
  console.log('post', post);
}

ngOnInit():void {
  setTimeout(() => {
    console.log('timeout');
    this.posts[0].title = 'Changed!'
    
  },5000)
   
}
}

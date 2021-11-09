import { Component } from '@angular/core';

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
export class AppComponent {

posts: Post[] = [
  {title: 'Angular JS', text: 'Post text', id: 1},
  {title: 'Angular JS 2', text: 'Post text 2', id: 2},
];

}

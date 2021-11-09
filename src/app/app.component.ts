import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
arr = [1,1,2,3,5,8,13]

objects = [{
  title: 'Post 1', author:'Nikita', comments: [{
    name:'max', text:'lorem 1'
  },
  {
    name:'max', text:'lorem 1'
  },
  {
    name:'max', text:'lorem 1'
  },]
},
{
  title: 'Post 2', author:'Nikita2', comments: [
  {name:'max', text:'lorem 2'},
  {name:'max', text:'lorem 2'},
  {name:'max', text:'lorem 2'},]
}
]

}

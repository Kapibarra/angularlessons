import {Component} from '@angular/core'

export interface Post {
  title: string,
  text:string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  e: number = Math.E
str = 'hello world'
date: Date = new Date()
float:number = 0.42
obj = {
  a:1,
  b: {
    c:2,
    d: {
      e:3,
      f:4
    }
  }
}

search = ''
searchField = 'title'
posts:Post[] = [
  {title:'Beer',text: 'Best beer in the world'},
  {title:'Bread', text: 'Best bread in the world!!!!'},
  {title:'JS', text: 'Best JS ANGULAR in the world!!!!'}
]

addPost() {
  this.posts.unshift({title:'ang12', text: 'learnming'})
}
}

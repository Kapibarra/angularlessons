import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('box', [
      state('start', style({
        background: 'blue',
      })),
      state('end', style({
        background: 'red',
        transform: 'scale(1.2)',
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('950ms ease-in'))
    ])
  ]
})
export class AppComponent {
boxState = 'start';

animate() {
  this.boxState = this.boxState === 'end' ? 'start' : 'end';
}
}

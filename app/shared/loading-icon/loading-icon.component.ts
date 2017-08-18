import { Component, Input } from '@angular/core';

@Component({
  selector: '<loading-icon></loading-icon>',
  templateUrl: 'loading-icon.component.html',
  styles: [require('./loading-icon.css').toString()]
})
export class LoadingIconComponent {
  @Input() text: string = 'Loading...';
}

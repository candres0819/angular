import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';

  get colors() {
    return {
      'bg-success-700': this.color == 'success',
      'hover:bg-success-800': this.color == 'success',
      'focus:ring-4-success-400': this.color == 'success',
      'bg-primary-700': this.color == 'primary',
      'hover:bg-primary-800': this.color == 'primary',
      'focus:ring-4-primary-400': this.color == 'primary'
    }
  }
}

import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {

  drop($event: CdkDragDrop<any[]>) {
    console.log($event);
  }
}

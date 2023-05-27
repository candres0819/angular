import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Column, ToDo } from '../../models/todo.model'
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  columns: Column[] = [{
    title: 'ToDo',
    todos: [{
      id: '1.1',
      title: 'Task 1.1'
    }, {
      id: '1.2',
      title: 'Task 1.2'
    }, {
      id: '1.3',
      title: 'Task 1.3'
    }]
  }, {
    title: 'Doing',
    todos: [{
      id: '1.1',
      title: 'Task 1.1'
    }, {
      id: '1.2',
      title: 'Task 1.2'
    }, {
      id: '1.3',
      title: 'Task 1.3'
    }]
  }, {
    title: 'Done',
    todos: [{
      id: '3.1',
      title: 'Task 3.1'
    }, {
      id: '3.2',
      title: 'Task 3.2'
    }, {
      id: '3.3',
      title: 'Task 3.3'
    }]
  }];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  addColum() {
    this.columns.push({
      title: 'New Column',
      todos: []
    });
  }
}

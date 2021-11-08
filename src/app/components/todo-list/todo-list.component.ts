import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title = 'To-Do List';
  list: any[] = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item, completed: false })
  }

  doneTask(id: number) {
    this.list.map(function (e) {
      if (e.id === id) {
        e.completed = !e.completed;
      }
    })
  }

  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }


  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/services';
import { Todo } from '../models/task';

@Component({
  selector: 'app-todos',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  // 
}

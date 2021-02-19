import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import { loadDeleteTodos } from '../../store/actions/delete-todo.actions';
import { loadUpdateTodos } from '../../store/actions/update-todo.actions';
import { TodoState } from '../../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() public todo: TodoModel;

  constructor(private todoStore: Store<TodoState>) {}

  ngOnInit(): void {}

  updateTodo() {
    this.todoStore.dispatch(loadUpdateTodos({ todo: this.todo }));
  }

  deleteTodo() {
    this.todoStore.dispatch(loadDeleteTodos({ todo: this.todo }));
  }
}

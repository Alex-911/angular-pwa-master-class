import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGetTodos } from '../../store/actions/get-todo.actions';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss'],
})
export class TodoMainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

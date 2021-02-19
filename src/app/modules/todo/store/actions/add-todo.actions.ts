import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const loadAddTodos = createAction(
  '[AddTodo] Load AddTodos',
  props<{ todoText: string }>()
);

export const loadAddTodosSuccess = createAction(
  '[AddTodo] Load AddTodos Success'
);

export const loadAddTodosFailure = createAction(
  '[AddTodo] Load AddTodos Failure',
  props<{ error: string }>()
);

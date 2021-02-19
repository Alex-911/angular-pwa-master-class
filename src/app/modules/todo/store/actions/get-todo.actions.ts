import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const loadGetTodos = createAction('[GetTodo] Load GetTodos');

export const loadGetTodosSuccess = createAction(
  '[GetTodo] Load GetTodos Success',
  props<{ todos: TodoModel[] }>()
);

export const loadGetTodosFailure = createAction(
  '[GetTodo] Load GetTodos Failure',
  props<{ error: string }>()
);

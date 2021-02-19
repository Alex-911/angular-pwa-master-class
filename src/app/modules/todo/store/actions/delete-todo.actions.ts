import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const loadDeleteTodos = createAction(
  '[DeleteTodo] Load DeleteTodos',
  props<{ todo: TodoModel }>()
);

export const loadDeleteTodosSuccess = createAction(
  '[DeleteTodo] Load DeleteTodos Success'
);

export const loadDeleteTodosFailure = createAction(
  '[DeleteTodo] Load DeleteTodos Failure',
  props<{ error: string }>()
);

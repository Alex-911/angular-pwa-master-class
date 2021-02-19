import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const loadUpdateTodos = createAction(
  '[UpdateTodo] Load UpdateTodos',
  props<{ todo: TodoModel }>()
);

export const loadUpdateTodosSuccess = createAction(
  '[UpdateTodo] Load UpdateTodos Success'
);

export const loadUpdateTodosFailure = createAction(
  '[UpdateTodo] Load UpdateTodos Failure',
  props<{ error: string }>()
);

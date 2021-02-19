import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import {
  loadUpdateTodos,
  loadUpdateTodosFailure,
  loadUpdateTodosSuccess,
} from '../actions/update-todo.actions';

@Injectable()
export class UpdateTodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  public getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUpdateTodos),
      mergeMap(async (action) => {
        return this.todoService
          .updateTodo(action.todo)
          .then(() => loadUpdateTodosSuccess())
          .catch((e) => loadUpdateTodosFailure({ error: `${e}` }));
      })
    );
  });
}

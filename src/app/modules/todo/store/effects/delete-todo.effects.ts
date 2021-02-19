import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import {
  loadDeleteTodos,
  loadDeleteTodosFailure,
  loadDeleteTodosSuccess,
} from '../actions/delete-todo.actions';

@Injectable()
export class DeleteTodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  public getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDeleteTodos),
      mergeMap(async (action) => {
        return this.todoService
          .deleteTodo(action.todo)
          .then(() => loadDeleteTodosSuccess())
          .catch((e) => loadDeleteTodosFailure({ error: `${e}` }));
      })
    );
  });
}

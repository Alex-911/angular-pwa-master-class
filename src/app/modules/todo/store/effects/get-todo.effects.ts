import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import {
  loadGetTodos,
  loadGetTodosFailure,
  loadGetTodosSuccess,
} from '../actions/get-todo.actions';

@Injectable()
export class GetTodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  public getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGetTodos),
      mergeMap(() => {
        return this.todoService.getTodo().pipe(
          map((todos) => loadGetTodosSuccess({ todos })),
          catchError((e) => of(loadGetTodosFailure({ error: `${e}` })))
        );
      })
    );
  });
}

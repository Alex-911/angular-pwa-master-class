import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import {
  loadAddTodos,
  loadAddTodosFailure,
  loadAddTodosSuccess,
} from '../actions/add-todo.actions';

@Injectable()
export class AddTodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  public getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAddTodos),
      mergeMap(async (action) => {
        return this.todoService
          .addTodo(action.todoText)
          .then(() => loadAddTodosSuccess())
          .catch((e) => loadAddTodosFailure({ error: `${e}` }));
      })
    );
  });
}

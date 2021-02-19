import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DeleteTodoEffects } from './delete-todo.effects';

describe('DeleteTodoEffects', () => {
  let actions$: Observable<any>;
  let effects: DeleteTodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeleteTodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DeleteTodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

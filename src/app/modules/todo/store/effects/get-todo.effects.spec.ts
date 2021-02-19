import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GetTodoEffects } from './get-todo.effects';

describe('GetTodoEffects', () => {
  let actions$: Observable<any>;
  let effects: GetTodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetTodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GetTodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

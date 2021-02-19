import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AddTodoEffects } from './add-todo.effects';

describe('AddTodoEffects', () => {
  let actions$: Observable<any>;
  let effects: AddTodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddTodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AddTodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

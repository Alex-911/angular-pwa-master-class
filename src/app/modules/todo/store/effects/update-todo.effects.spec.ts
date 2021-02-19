import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UpdateTodoEffects } from './update-todo.effects';

describe('UpdateTodoEffects', () => {
  let actions$: Observable<any>;
  let effects: UpdateTodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UpdateTodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UpdateTodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

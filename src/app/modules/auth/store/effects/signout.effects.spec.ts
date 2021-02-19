import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SignoutEffects } from './signout.effects';

describe('SignoutEffects', () => {
  let actions$: Observable<any>;
  let effects: SignoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignoutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SignoutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

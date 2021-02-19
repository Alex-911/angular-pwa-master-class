import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SignInWithGoogleEffects } from './sign-in-with-google.effects';

describe('SignInWithGoogleEffects', () => {
  let actions$: Observable<any>;
  let effects: SignInWithGoogleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignInWithGoogleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SignInWithGoogleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

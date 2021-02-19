import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CheckAuthEffects } from './check-auth.effects';

describe('CheckAuthEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckAuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckAuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CheckAuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

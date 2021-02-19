import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
import {
  loadSignouts,
  loadSignoutsFailure,
  loadSignoutsSuccess,
} from '../actions/signout.actions';

@Injectable()
export class SignoutEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  public signout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSignouts),
      mergeMap(async () => {
        return this.authService
          .signout()
          .then(() => {
            return loadSignoutsSuccess();
          })
          .catch((e) => {
            return loadSignoutsFailure({ error: `${e}` });
          });
      })
    );
  });

  private signoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadSignoutsSuccess),
        tap(() => this.router.navigate(['/']))
      );
    },
    {
      dispatch: false,
    }
  );
}

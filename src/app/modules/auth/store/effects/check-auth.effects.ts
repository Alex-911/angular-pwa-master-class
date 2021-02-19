import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
import {
  loadCheckAuths,
  loadCheckAuthsFailure,
  loadCheckAuthsSuccess,
} from '../actions/check-auth.actions';

@Injectable()
export class CheckAuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  public checkAuth$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCheckAuths),
      mergeMap(() => {
        return this.authService.checkAuth().pipe(
          map((user) => {
            if (user !== null) {
              const authUser: UserModel = {
                id: user.uid,
                email: user.email,
                name: user.displayName,
                photoUrl: user.photoURL,
              };
              return loadCheckAuthsSuccess({ data: { user: authUser } });
            } else {
              return loadCheckAuthsFailure({ error: 'Cancelled By User' });
            }
          }),
          catchError((e) => of(loadCheckAuthsFailure({ error: `${e}` })))
        );
      })
    );
  });

  private checkAuthSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadCheckAuthsSuccess),
        tap(() => {
          this.router.navigate(['/todos']);
        })
      );
    },
    { dispatch: false }
  );
}

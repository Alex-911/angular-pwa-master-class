import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
import {
  loadSignInWithGoogles,
  loadSignInWithGooglesFailure,
  loadSignInWithGooglesSuccess,
} from '../actions/sign-in-with-google.actions';

@Injectable()
export class SignInWithGoogleEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  public signInWithGoogle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSignInWithGoogles),
      mergeMap(async () => {
        return this.authService
          .signInWithGoogle()
          .then((user) => {
            if (user !== null) {
              const authUser: UserModel = {
                id: user.uid,
                email: user.email,
                name: user.displayName,
                photoUrl: user.photoURL,
              };
              return loadSignInWithGooglesSuccess({ data: { user: authUser } });
            } else {
              return loadSignInWithGooglesFailure({
                error: 'CANCELLED BY USER',
              });
            }
          })
          .catch((e) => {
            return loadSignInWithGooglesFailure({ error: `${e}` });
          });
      })
    );
  });

  private signInWithGoogleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadSignInWithGooglesSuccess),
        tap(() => this.router.navigate(['/todos']))
      );
    },
    {
      dispatch: false,
    }
  );
}

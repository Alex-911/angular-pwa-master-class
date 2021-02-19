import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const loadSignInWithGoogles = createAction(
  '[SignInWithGoogle] Load SignInWithGoogles'
);

export const loadSignInWithGooglesSuccess = createAction(
  '[SignInWithGoogle] Load SignInWithGoogles Success',
  props<{
    data: {
      user: UserModel;
    };
  }>()
);

export const loadSignInWithGooglesFailure = createAction(
  '[SignInWithGoogle] Load SignInWithGoogles Failure',
  props<{ error: string }>()
);

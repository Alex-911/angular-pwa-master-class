import { createAction, props } from '@ngrx/store';

export const loadSignouts = createAction('[Signout] Load Signouts');

export const loadSignoutsSuccess = createAction(
  '[Signout] Load Signouts Success'
);

export const loadSignoutsFailure = createAction(
  '[Signout] Load Signouts Failure',
  props<{ error: string }>()
);

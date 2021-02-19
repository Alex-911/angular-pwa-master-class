import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, State } from '../reducer/auth.reducer';

const authFeatureSelector = createFeatureSelector<State>(authFeatureKey);

export const getAuthUser = createSelector(
  authFeatureSelector,
  (state: State) => state.user
);
export const getAuthLoading = createSelector(
  authFeatureSelector,
  (state: State) => state.loading
);
export const getAuthError = createSelector(
  authFeatureSelector,
  (state: State) => state.error
);

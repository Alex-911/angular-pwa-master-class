import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  todoAdapter,
  todoFeatureKey,
  TodoState,
} from '../reducers/todo.reducer';

export const todoFeatureSelector = createFeatureSelector<TodoState>(
  todoFeatureKey
);

export const getTodos = createSelector(
  todoFeatureSelector,
  todoAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  todoFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  todoFeatureSelector,
  (state) => state.error
);

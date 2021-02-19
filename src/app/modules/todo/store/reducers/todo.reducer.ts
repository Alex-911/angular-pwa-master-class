import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import {
  loadAddTodos,
  loadAddTodosFailure,
  loadAddTodosSuccess,
} from '../actions/add-todo.actions';
import {
  loadDeleteTodos,
  loadDeleteTodosFailure,
  loadDeleteTodosSuccess,
} from '../actions/delete-todo.actions';
import {
  loadGetTodos,
  loadGetTodosFailure,
  loadGetTodosSuccess,
} from '../actions/get-todo.actions';
import {
  loadUpdateTodos,
  loadUpdateTodosFailure,
  loadUpdateTodosSuccess,
} from '../actions/update-todo.actions';

export const todoFeatureKey = 'todo';

export interface TodoState extends EntityState<TodoModel> {
  loading: boolean;
  error: string | null;
}

export const todoAdapter: EntityAdapter<TodoModel> = createEntityAdapter<TodoModel>();

const defaultState: TodoState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const initialState: TodoState = todoAdapter.getInitialState(
  defaultState
);

export const todoReducer = createReducer(
  initialState,
  on(loadGetTodos, (state) => ({ ...state, loading: true })),
  on(loadGetTodosSuccess, (state, action) =>
    todoAdapter.setAll(action.todos, { ...state, loading: false })
  ),
  on(loadGetTodosFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(loadAddTodos, (state) => ({ ...state, loading: true })),
  on(loadAddTodosSuccess, (state) => ({ ...state, loading: false })),
  on(loadAddTodosFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(loadUpdateTodos, (state) => ({ ...state, loading: true })),
  on(loadUpdateTodosSuccess, (state) => ({ ...state, loading: false })),
  on(loadUpdateTodosFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(loadDeleteTodos, (state) => ({ ...state, loading: true })),
  on(loadDeleteTodosSuccess, (state) => ({ ...state, loading: false })),
  on(loadDeleteTodosFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);

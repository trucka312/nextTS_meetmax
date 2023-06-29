//config reducers
import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { getUsersRequest, getUsersSuccess, getUsersFailure } from './actions';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AppState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: AppState = {
  users: [],
  loading: false,
  error: null,
};

const users = createReducer(initialState.users)
.handleAction(getUsersSuccess, (state: AppState['users'], action: PayloadAction<'GET_USERS_SUCCESS', { users: User[] }>) => action.payload.users)
.handleAction(getUsersFailure, () => initialState.users);
  

const loading = createReducer(initialState.loading)
  .handleAction(getUsersRequest, () => true)
  .handleAction([getUsersSuccess, getUsersFailure], () => false);

const error = createReducer(initialState.error)
  .handleAction(getUsersRequest, () => null)
  .handleAction(getUsersFailure, () => 'Error fetching users');

const rootReducer = combineReducers({
  users,
  loading,
  error,
});

export default rootReducer;
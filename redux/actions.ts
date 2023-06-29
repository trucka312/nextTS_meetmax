// config actions
import { createAction } from 'typesafe-actions';
import { User } from './reducer'

export const getUsersRequest = createAction('GET_USERS_REQUEST')();
export const getUsersSuccess = createAction(
  'GET_USERS_SUCCESS',
  (users: User[]) => ({ users })
)();
export const getUsersFailure = createAction('GET_USERS_FAILURE')();
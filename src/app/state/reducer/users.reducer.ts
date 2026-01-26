import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/users.actions';
import { UserState } from 'src/app/modals/user-state.modal';

// Initial state for users
export const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(

  initialState,

  // Load all users
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
  })),

  // Load all succcesful user
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),

  // Load all users failure
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Load user by ID
  on(UserActions.loadUserById, (state) => ({
    ...state,
    loading: true,
  })),

  // Load user by ID success
  on(UserActions.loadUserByIdSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),

  // Load user by ID failure
  on(UserActions.loadUserByIdFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  }))
);

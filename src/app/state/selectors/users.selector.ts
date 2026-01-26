import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "src/app/modals/user-state.modal";

// Select the users feature state
// Becasue NgRx needs to know where your users state lives in the store
export const selectUsersState = createFeatureSelector<UserState>('users')

// Select all users
export const selectAllUsers = createSelector(
    selectUsersState,
    state => state.users
);

// Select specific user
export const selectSelectedUser = createSelector(
    selectUsersState,
    state => state.selectedUser
);

// Select error for users
export const selectUsersError = createSelector(
    selectUsersState,
    state => state.error
);

// Select loading for users
export const selectUsersLoading = createSelector(
    selectUsersState,
    state => state.loading
);
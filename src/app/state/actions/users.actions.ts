import { createAction, props } from "@ngrx/store";
import { UserModal } from "src/app/modals/user.modal";

// Load all users

export const loadUsers = createAction(
    '[Users] Load all users'
);

export const loadUsersSuccess = createAction(
    '[Users] Load users success',
    props<{users : UserModal[]}>()
);

export const loadUsersFailure = createAction(
    '[Users] Load users failure',
    props<{error : any}>()
);

// Load user by ID

export const loadUserById = createAction(
    '[Users] Load user by ID',
    props<{id : number}>()
)

export const loadUserByIdSuccess = createAction(
    '[Users] Load user by ID success',
    props<{user : UserModal}>()
)

export const loadUserByIdFailure = createAction(
    '[Users] Load user by ID failure',
    props<{error : any}>()
)
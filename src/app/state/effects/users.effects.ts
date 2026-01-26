import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "src/app/service/users.service";
import * as UserActions from "../actions/users.actions"
import { catchError, map, mergeMap, of } from "rxjs";

export class UsersEffects {

    loadUsers$ = createEffect(() => 
    this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() => 
        this.userService.getAllUsers().pipe(
            map((users) => UserActions.loadUsersSuccess({users})),
            catchError((error) => of(UserActions.loadUsersFailure({error})))
        ))
    ));

    loadUsersById$ = createEffect(() => 
    this.actions$.pipe(
        ofType(UserActions.loadUserById),
        mergeMap(({id}) => 
        this.userService.getUserById(id).pipe(
            map((user) => UserActions.loadUserByIdSuccess({user})),
            catchError((error) => of(UserActions.loadUserByIdFailure({error})))
        ))
    ));

    // Inject dependencies for effects
    constructor(
        // This listens to actions as they happen
        private actions$: Actions,
         // Service that talks to the backend to get posts
        private userService: UsersService
    ) {}
}
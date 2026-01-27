import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "src/app/service/users.service";
import * as UserActions from "../actions/users.actions"
import { catchError, map, mergeMap, of } from "rxjs";

export class UsersEffects {

  // This creates an NgRx effect
  // An effect listens for actions and runs side effects, like API calls
  loadUsers$ = createEffect(() => 

    // action$ is a stream of all actions in the app
    this.actions$.pipe(

      // Only react when the "loadPosts" action is dispatched
      ofType(UserActions.loadUsers),

        // mergeMap lets us run async work (like calling an API)
        mergeMap(() => 

        // Call the service method that gets all posts from the backend
        this.userService.getAllUsers().pipe(
            
            // If the API call succeeds,
            // turn the result into a success action
            map((users) => UserActions.loadUsersSuccess({users})),
            
            // If the API call fails,
            // turn the error into a failure action
            catchError((error) => of(UserActions.loadUsersFailure({error})))
        ))
    ));

    // This effect loads ONE post by its ID
    loadUsersById$ = createEffect(() => 

    // Listen to all actions
    this.actions$.pipe(

        // Only react to the "loadPostById" action
        ofType(UserActions.loadUserById),

        // Grab the "id" from the action that was dispatched
        mergeMap(({id}) => 

        // Call the service to get one post using the ID    
        this.userService.getUserById(id).pipe(

            // If successful, dispatch a success action
            map((user) => UserActions.loadUserByIdSuccess({user})),

            // If it fails, dispatch a failure action
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
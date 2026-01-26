import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from '../actions/posts.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostsService } from 'src/app/service/posts.service';

@Injectable()
export class PostsEffects {
  // This creates an NgRx effect.
  // An effect listens for actions and runs side effects (like API calls).
  loadPosts$ = createEffect(() =>
    // action$ is a stream of ALL actions in the app
    this.action$.pipe(
      // Only react when the "loadPosts" action is dispatched
      ofType(PostActions.loadPosts),

      // mergeMap lets us run async work (like calling an API)
      mergeMap(() =>
        // Call the service method that gets all posts from the backend
        this.postService.getAllPosts().pipe(
          // If the API call succeeds,
          // turn the result into a SUCCESS action
          map((posts) => PostActions.loadPostsSuccess({ posts })),

          // If the API call fails,
          // turn the error into a FAILURE action
          catchError((error) => of(PostActions.loadPostsFailure({ error }))),
        ),
      ),
    ),
  );

  // This effect loads ONE post by its ID
  loadPostsById$ = createEffect(() =>
    // Listen to all actions
    this.action$.pipe(
      // Only react to the "loadPostById" action
      ofType(PostActions.loadPostById),

      // Grab the "id" from the action that was dispatched
      mergeMap(({ id }) =>
        // Call the service to get one post using the ID
        this.postService.getPostById(id).pipe(
          // If successful, dispatch a SUCCESS action
          map((post) => PostActions.loadPostByIdSuccess({ post })),

          // If it fails, dispatch a FAILURE action
          catchError((error) => of(PostActions.loadPostByIdFailure({ error }))),
        ),
      ),
    ),
  );

  // Inject dependencies for effects
  constructor(
    // This listens to actions as they happen
    private action$: Actions,
    // Service that talks to the backend to get posts
    private postService: PostsService,
  ) {}
}

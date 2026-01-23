import { createAction, props } from "@ngrx/store";
import { PostModal } from "src/app/modals/post.modal";

// Load all posts

export const loadPosts = createAction(
    '[Posts] Load posts');

export const loadPostsSuccess = createAction(
    '[Posts] Load posts success',
    props<{posts : PostModal[]}>()
);

export const loadPostsFailure = createAction(
    '[Posts] Load posts failure',
    props<{error: any}>()
);

// Load post by ID

export const loadPostById = createAction(
    '[Posts] Load posts by ID',
    props<{id : number}>()
);

export const loadPostByIdSuccess = createAction(
    '[Posts] Load posts by ID success',
    props<{post : PostModal}>()
);

export const loadPostByIdFailure = createAction(
    '[Posts] Load posts by ID failure',
    props<{error : any}>()
);
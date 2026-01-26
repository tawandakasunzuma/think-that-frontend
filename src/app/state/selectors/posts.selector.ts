import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "src/app/modals/post-state.modal";

// Select the posts feature state
// Becasue NgRx needs to know where your posts state lives in the store
export const selectPostsState = createFeatureSelector<PostState>("posts");

// Select all posts
export const selectAllPosts = createSelector(
    selectPostsState,
    state => state.posts
);

// Select specific post
export const selectSelectedPost = createSelector(
    selectPostsState,
    state => state.selectedPost
);

// Select posts error
export const selectPostsError = createSelector(
    selectPostsState,
    state => state.error
);

// Select posts loading
export const selectPostsLoading = createSelector(
    selectPostsState,
    state => state.loading
);
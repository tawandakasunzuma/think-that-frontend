import { createReducer, on } from '@ngrx/store';
import * as PostActions from "../actions/posts.actions"
import { PostState } from '../../modals/post-state.modal';

// Initial state for posts
export const initialState: PostState = {
  posts: [],
  selectedPost: null,
  error: null,
  loading: false,
};

export const postReducer = createReducer(

    initialState,

    // Load all posts
    on(PostActions.loadPosts, state => ({
        ...state,
        loading: true
    })),
    
    // Load all posts success
    on(PostActions.loadPostsSuccess, (state, { posts }) => ({
        ...state,
        posts,
        loading: false,
    })),

    // Load all posts failure
    on(PostActions.loadPostsFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false,
    })),

    // Load post by ID
    on(PostActions.loadPostById, state => ({
        ...state,
        loading: true,
    })),

    // Load post by ID success
    on(PostActions.loadPostByIdSuccess, (state, { post }) => ({
        ...state,
        selectedPost: post,
        loading: false,
    })),

    // Load post by ID failure
    on(PostActions.loadPostByIdFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false,
    })),

)
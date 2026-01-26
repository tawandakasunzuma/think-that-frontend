import { PostModal } from "./post.modal";

// Modal for Post state
export interface PostState {
    posts: PostModal[];
    selectedPost: PostModal | null;
    loading: boolean;
    error: any;
}
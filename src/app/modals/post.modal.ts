export interface PostModal {
    postId: number,
    title: string,
    description: string,
    createdAt: Date,
    userId: number // Foreign key
} 
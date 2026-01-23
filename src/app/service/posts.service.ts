import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { PostModal } from '../modals/post.modal';

// Makes service available through the entire app
@Injectable({
  providedIn: 'root'
})

export class PostsService {

  // API used to get posts data
  private apiUrl = `${environment.apiUrl}/posts`;

  // Http is used to send requests to the backend
  constructor(private http: HttpClient) { }

  // Create new product
  createPost (post: PostModal) : Observable<PostModal> {
    return this.http.post<PostModal>(this.apiUrl, post)
  }

  // Get all posts from the server
  getAllPosts(): Observable<PostModal[]> {
    return this.http.get<PostModal[]>(this.apiUrl)
  };

  // Get posts by ID
  getPostById(id: Number): Observable<PostModal | undefined> {
    return this.http.get<PostModal>(`${this.apiUrl}/${id}`)
  };

  // Update post
  updatePost(id: Number, post: PostModal) : Observable<PostModal> {
    return this.http.patch<PostModal>(`${this.apiUrl}/${id}`, post);
  };

  // Delete post
  deletePost(id: Number) : void | undefined {
    this.http.delete<PostModal>(`${this.apiUrl}/${id}`);
  };
}

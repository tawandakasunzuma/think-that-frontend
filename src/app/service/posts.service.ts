import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { postModal } from '../modals/post.modal';

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
  createPost (post: postModal) : Observable<postModal> {
    return this.http.post<postModal>(this.apiUrl, post)
  }

  // Get all posts from the server
  getAllPosts(): Observable<postModal[]> {
    return this.http.get<postModal[]>(this.apiUrl)
  };

  // Get posts by ID
  getPostById(id: Number): Observable<postModal | undefined> {
    return this.http.get<postModal>(`${this.apiUrl}/${id}`)
  };

  // Update post
  updatePost(id: Number, post: postModal) : Observable<postModal> {
    return this.http.patch<postModal>(`${this.apiUrl}/${id}`, post);
  };

  // Delete post
  deletePost(id: Number) : void | undefined {
    this.http.delete<postModal>(`${this.apiUrl}/${id}`);
  };
}

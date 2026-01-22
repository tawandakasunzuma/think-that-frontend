import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { userModal } from '../modals/user.modal';
import { Observable } from 'rxjs';
import { postModal } from '../modals/post.modal';

// Make service available throughout app
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  // Create User
  createUser (user: userModal) : Observable<userModal> {
    return this.http.post<userModal>(this.apiUrl, user)
  }

  // Get user by ID
  getUserById (id: Number) : Observable<userModal> {
    return this.http.get<userModal>(`${this.apiUrl}/${id}`)
  }

  // Get all users
  getAllUsers() : Observable<userModal[]> {
    return this.http.get<userModal[]>(this.apiUrl)
  }

  // Update user
  updateUser(id: Number, user: userModal) : Observable<userModal> {
    return this.http.patch<userModal>(`${this.apiUrl}/${id}`, user);
  }

  // Delete user
  deleteUser(id: Number) : void {
    this.http.delete<userModal>(`${this.apiUrl}/${id}`);
  }
}

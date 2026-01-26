import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { UserModal } from '../modals/user.modal';
import { Observable } from 'rxjs';

// Make service available throughout app
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  // API used to get users data
  private apiUrl = `${environment.apiUrl}/users`;

  // Http is used to send requests to the backend
  constructor(private http: HttpClient) { }

  // Create user
  createUser (user: UserModal) : Observable<UserModal> {
    return this.http.post<UserModal>(this.apiUrl, user)
  }

  // Get user by ID
  getUserById (id: number) : Observable<UserModal> {
    return this.http.get<UserModal>(`${this.apiUrl}/${id}`)
  }

  // Get all users
  getAllUsers() : Observable<UserModal[]> {
    return this.http.get<UserModal[]>(this.apiUrl)
  }

  // Update user
  updateUser(id: number, user: UserModal) : Observable<UserModal> {
    return this.http.patch<UserModal>(`${this.apiUrl}/${id}`, user);
  }

  // Delete user
  deleteUser(id: number) : void {
    this.http.delete<UserModal>(`${this.apiUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { userModal } from '../modals/user.modal';
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

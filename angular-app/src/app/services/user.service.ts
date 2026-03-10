import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from '../../environments/environment'; // Adjust the path

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL: string = environment.apiUrl + "/user";  // <-- use env

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/all`);
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }

  addUser(firstname: string, lastname: string): Observable<any> {
    let body = { firstName: firstname, lastName: lastname };
    return this.httpClient.post(`${this.baseURL}/add`, body);
  }
}
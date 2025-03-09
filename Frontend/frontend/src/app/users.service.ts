import { Injectable } from '@angular/core';
import  User  from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "http:localhost:8000/api/"

  constructor(private http: HttpClient) { }

// Obtener todos los usuarios
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.url}+users/`);  // Llamada a la API para obtener usuarios
}

// Obtener un usuario por su ID
getUserById(id: number): Observable<User> {
  return this.http.get<User>(`${this.url}+user/+${id}`);  // Llamada a la API para obtener un usuario por ID
}

// Crear un nuevo usuario
addUser(user: User): Observable<User> {
  return this.http.post<User>(`${this.url}+users/`, user);  // Llamada a la API para crear un nuevo usuario
}

// Actualizar un usuario existente
updateUser(id: number, user: User): Observable<User> {
  return this.http.put<User>(`${this.url}user/${id}`, user);  // Llamada a la API para actualizar un usuario
}

// Eliminar un usuario
deleteUser(id: number): Observable<void> {
  return this.http.delete<void>(`${this.url}user/${id}`);  // Llamada a la API para eliminar un usuario
}
}

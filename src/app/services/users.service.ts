import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      id: '123456789',
      createdDate: '2021-01-06T00:00:00.000Z',
      status: 'En validation',
      firstName: 'Mohamed',
      lastName: 'Taha',
      userName: 'mtaha',
      registrationNumber: '2584',
    },
    {
      id: '987654321',
      createdDate: '2021-07-25T00:00:00.000Z',
      status: 'Validé',
      firstName: 'Hamid',
      lastName: 'Orrich',
      userName: 'horrich',
      registrationNumber: '1594',
    },
    {
      id: '852963741',
      createdDate: '2021-09-15T00:00:00.000Z',
      status: 'Rejeté',
      firstName: 'Rachid',
      lastName: 'Mahidi',
      userName: 'rmahidi',
      registrationNumber: '3576',
    },
  ];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(
      map((users) =>
        users.map((user) => ({
          ...user,
          createdDate: new Date(user.createdDate),
        }))
      )
    );
  }
}

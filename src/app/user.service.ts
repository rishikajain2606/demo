import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor() { }
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this
            .http
              .get("https://jsonplaceholder.typicode.com/users")
            .pipe(
              map(res => res)
          );
      }
}

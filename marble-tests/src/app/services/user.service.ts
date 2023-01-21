import { Injectable } from '@angular/core';
import { interval, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = ['Anna', 'Guilhermo', 'Chris'];

  getUsers() {
    return interval(1000).pipe(
      take(this.users.length),
      map((index) => this.users[index])
    );
  }
}

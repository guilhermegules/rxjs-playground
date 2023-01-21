import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AllMightyService {
  constructor(private userService: UserService) {}

  getModifiedUsers() {
    return this.userService.getUsers().pipe(map((user) => `Mighty ${user}`));
  }
}

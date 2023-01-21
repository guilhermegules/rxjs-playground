import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Marble Tests';
  users: string[] = [];

  private subscriptions = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.userService.getUsers().subscribe((user) => {
        this.users.push(user);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

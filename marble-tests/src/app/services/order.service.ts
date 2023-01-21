import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private pizza = new Subject<string>();

  constructor() {}

  get pizza$() {
    return this.pizza.asObservable();
  }

  orderPizza(name: string) {
    this.pizza.next(name);
  }
}

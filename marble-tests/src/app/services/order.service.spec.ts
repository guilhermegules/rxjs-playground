import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should stream pizza "Meet" when we order a "Meet" pizza', () => {
    testScheduler.run((helpers) => {
      const { expectObservable, cold } = helpers;
      const meetPizza = 'Meet';
      const expected = '-a';
      const expectedValue = {
        a: meetPizza,
      };

      cold(expected).subscribe(() => {
        service.orderPizza(meetPizza);
      });

      expectObservable(service.pizza$).toBe(expected, expectedValue);
    });
  });
});

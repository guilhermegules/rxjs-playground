import { TestBed } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { TestScheduler } from 'rxjs/testing';

import { AllMightyService } from './all-mighty.service';
import { UserService } from './user.service';

describe('AllMightyService', () => {
  let service: AllMightyService;
  let userService: UserService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMightyService);
    userService = TestBed.inject(UserService);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly return mighty users', () => {
    spyOn(userService, 'getUsers').and.returnValue(
      hot('^-a-b-c', {
        a: 'Hans',
        b: 'Martin',
        c: 'Julia',
      })
    );

    const expected = cold('--a-b-c', {
      a: 'Mighty Hans',
      b: 'Mighty Martin',
      c: 'Mighty Julia',
    });

    expect(service.getModifiedUsers()).toBeObservable(expected);
  });

  it('should correctly return mighty users 2', () => {
    testScheduler.run((helpers) => {
      const { expectObservable, hot } = helpers;

      const user$ = hot('^-a-b-c', {
        a: 'Hans',
        b: 'Martin',
        c: 'Julia',
      });

      spyOn(userService, 'getUsers').and.returnValue(user$);

      const expected = '--a-b-c';
      const expectedValues = {
        a: 'Mighty Hans',
        b: 'Mighty Martin',
        c: 'Mighty Julia',
      };

      expectObservable(service.getModifiedUsers()).toBe(
        expected,
        expectedValues
      );
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const users$ = cold('-a-b-c-|', {
        a: 'Guilherme',
        b: 'Caroline',
        c: 'João',
      });
      spyOn(service, 'getUsers').and.returnValue(users$);
      const expect = '-a-b-c-|';
      const expectedValues = {
        a: 'Guilherme',
        b: 'Caroline',
        c: 'João',
      };
      expectObservable(service.getUsers()).toBe(expect, expectedValues);
    });
  });
});

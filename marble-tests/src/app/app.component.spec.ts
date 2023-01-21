import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { getTestScheduler, cold } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { TestScheduler } from 'rxjs/testing';
import { filter, map, throttleTime } from 'rxjs';

describe('AppComponent', () => {
  let userService: UserService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    userService = TestBed.inject(UserService);
    spyOn(userService, 'getUsers').and.returnValue(
      cold('a-b-c', { a: 'Mike', b: 'Flo', c: 'Rolf' })
    );

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show all user names', () => {
    fixture.detectChanges();

    getTestScheduler().flush();

    fixture.detectChanges();

    const liElements = fixture.debugElement.queryAll(By.css('.user'));

    expect(liElements.length).toBe(3);
    expect(liElements[0].nativeElement.innerText).toBe('Mike');
    expect(liElements[1].nativeElement.innerText).toBe('Flo');
    expect(liElements[2].nativeElement.innerText).toBe('Rolf');
  });
});

describe('RxJS Marbles', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('generates the stream correctly', () => {
    testScheduler.run((helpers) => {
      const { cold, time, expectObservable, expectSubscriptions } = helpers;
      const e1 = cold(' -a--b--c---|');
      const e1subs = '  ^----------!';
      const t = time('   ---|       ');
      const expected = '-a-----c---|';
      expectObservable(e1.pipe(throttleTime(t))).toBe(expected);
      expectSubscriptions(e1.subscriptions).toBe(e1subs);
    });
  });

  it('should say hello world then complete', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const values = {
        a: 'hello',
        b: 'world',
      };
      const source$ = cold('-a-b-|', values);
      const expected = '-a-b-|';
      expectObservable(source$).toBe(expected, values);
    });
  });

  it('should filter odd values', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const values = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
      };
      const source$ = cold('abcdefghij|', values).pipe(
        filter((value) => value % 2 === 0)
      );
      const expected = 'a-c-e-g-i-|';
      expectObservable(source$).toBe(expected, values);
    });
  });

  it('should subscribe then complete a hot observable', () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const values = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
      };
      const source$ = hot('--a--b--c^--d--e--f|', values);
      const expected = '---d--e--f|';
      expectObservable(source$).toBe(expected, values);
    });
  });

  it('should double a value', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const values = { a: 1, b: 2, c: 3 };
      const source$ = cold('-a-b-c-|', values);
      const result$ = source$.pipe(map((value) => value * 2));
      const expected = '-a-b-c-|';
      expectObservable(result$).toBe(expected, {
        a: 2,
        b: 4,
        c: 6,
      });
    });
  });
});

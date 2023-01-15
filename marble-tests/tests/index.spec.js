const { TestScheduler } = require("rxjs/testing");
const { throttleTime } = require("rxjs");
const { filter } = require("rxjs/operators");

describe("RxJS Marbles", () => {
  let testScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toStrictEqual(expected);
    });
  });

  it("generates the stream correctly", () => {
    testScheduler.run((helpers) => {
      const { cold, time, expectObservable, expectSubscriptions } = helpers;
      const e1 = cold(" -a--b--c---|");
      const e1subs = "  ^----------!";
      const t = time("   ---|       ");
      const expected = "-a-----c---|";
      expectObservable(e1.pipe(throttleTime(t))).toBe(expected);
      expectSubscriptions(e1.subscriptions).toBe(e1subs);
    });
  });

  it("should say hello world then complete", () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const values = {
        a: "hello",
        b: "world",
      };
      const source$ = cold("-a-b-|", values);
      const expected = "-a-b-|";
      expectObservable(source$).toBe(expected, values);
    });
  });

  it("should filter odd values", () => {
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
      const source$ = cold("abcdefghij|", values).pipe(
        filter((value) => value % 2 === 0)
      );
      const expected = "a-c-e-g-i-|";
      expectObservable(source$).toBe(expected, values);
    });
  });

  it("should subscribe then complete a hot observable", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const values = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
      };
      const source$ = hot("--a--b--c^--d--e--f|", values);
      const expected = "---d--e--f|";
      expectObservable(source$).toBe(expected, values);
    });
  });
});

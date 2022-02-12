import { map, Observable, Subscriber } from "rxjs";

export const pow = (n: number) => (source: Observable<number>) =>
  new Observable((subscriber: Subscriber<number>) => {
    return source.subscribe({
      next: (value) => {
        subscriber.next(Math.pow(value, n));
      },
      error: (err) => {
        subscriber.error(err);
      },
      complete: () => {
        subscriber.complete();
      },
    });
  });

export const simplePow = (n: number) =>
  map((value: number) => Math.pow(value, n));

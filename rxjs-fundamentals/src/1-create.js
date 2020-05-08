import {
  Observable,
  of,
  interval,
  fromEvent,
  from,
  asyncSheduler
} from "rxjs";

const basic = Observable.create(observer => {
  observer.next("a");
  observer.next("b");
  observer.complete();
  observer.next("c");
});

basic.subscribe(console.log);

import { Observable, of, interval, fromEvent, from, asyncSheduler } from "rxjs";

const basic = Observable.create((observer) => {
  observer.next("a");
  observer.next("b");
  observer.complete();
  observer.next("c"); // Not appears on console
});

basic.subscribe(console.log);

const hello = of("hello");
hello.subscribe(console.log);

const world = from("world", asyncSheduler);
world.subscribe(console.log);

const event = fromEvent(document, "click");
event.subscribe(console.log);

const periodic = interval(500);
periodic.subscribe(console.log);
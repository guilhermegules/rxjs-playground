const rxjs = require("rxjs");

const replaySubject = new rxjs.ReplaySubject(3); // Buffer 3 values from subscriptions

replaySubject.subscribe({
  next: (value) => console.log(`ObserverA: ${value}`),
});

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);

replaySubject.subscribe({
  next: (value) => console.log(`ObserverB: ${value}`),
});

replaySubject.next(5);

// Logs:
// ObserverA: 1
// ObserverA: 2
// ObserverA: 3
// ObserverA: 4
// ObserverB: 2
// ObserverB: 3
// ObserverB: 4
// ObserverA: 5
// ObserverB: 5

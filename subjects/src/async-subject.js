const rxjs = require("rxjs");

const asyncSubject = new rxjs.AsyncSubject();

asyncSubject.subscribe((value) => console.log(`ObservableA: ${value}`));

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

asyncSubject.subscribe((value) => console.log(`ObservableB: ${value}`));

asyncSubject.next(4);
asyncSubject.complete();

// Logs:
// ObservableA: 4
// ObservableB: 4

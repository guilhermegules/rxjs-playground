const rxjs = require("rxjs");

const subject = new rxjs.Subject();

subject.subscribe({ next: (value) => console.log(`observer a: ${value}`) });

subject.subscribe((value) => console.log(`observer b: ${value}`));

// Each subscribe will emit two times
subject.next(1);

subject.next(2);

// Logs:
// observer a: 1
// observer b: 1
// observer a: 2
// observer b: 2

console.log("Using subject providing arguments to subscribe");

const observable = rxjs.from([1, 2, 3]);

// Subject is an Observer, this means that can be provided as the argument to the subscribe of any Observable
observable.subscribe(subject);

// Logs
// observer a: 1
// observer b: 1
// observer a: 2
// observer b: 2
// observer a: 3
// observer b: 3

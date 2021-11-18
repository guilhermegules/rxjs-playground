const rxjs = require("rxjs");

const behaviorSubject = new rxjs.BehaviorSubject(0);

behaviorSubject.subscribe((value) => console.log(`Observer A ${value}`));

behaviorSubject.next(1);
behaviorSubject.next(2);

behaviorSubject.subscribe((value) => console.log(`Observer B ${value}`));

behaviorSubject.next(3);

// Logs
// Observer A 0
// Observer A 1
// Observer A 2
// Observer B 2
// Observer A 3
// Observer B 3

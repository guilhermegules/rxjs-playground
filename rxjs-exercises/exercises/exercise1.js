const { interval } = require("rxjs");

const observable$ = interval(2000);

const subscription1 = observable$.subscribe((value) => console.log(value));

const subscription2 = observable$.subscribe((value) => console.log(value * 100));

setTimeout(() => {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
}, 6000);
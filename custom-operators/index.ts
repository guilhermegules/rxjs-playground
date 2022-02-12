import { from, interval, of, take } from "rxjs";
import { debug } from "./operators/debug";
import { evenMultiplied } from "./operators/even-multiplied";
import { firstTruthy } from "./operators/first-truthy";
import { log } from "./operators/log";
import { multiply, multiplyBy } from "./operators/multiply";
import { nullFilter } from "./operators/null-filter";
import { numbersOnly } from "./operators/numbers-only";

import { pow, simplePow } from "./operators/pow";
import { sum } from "./operators/sum";

console.log("pow operator");

from([1, 2, 3, 4, 5]).pipe(pow(3)).subscribe(console.log);

from([1, 2, 3, 4, 5]).pipe(simplePow(3)).subscribe(console.log);

console.log("Sum operator");

of(2).pipe(sum(2), sum(3)).subscribe(console.log);

console.log("Numbers only operator");

from([1, 2, "3", "4", 5]).pipe(numbersOnly()).subscribe(console.log);

console.log("Log operator");

of(1).pipe(log).subscribe();

of("Hello").pipe(log).subscribe();

of({ foo: "bar" }).pipe(log).subscribe();

of([1, 2, 3]).pipe(log).subscribe();

console.log("First truthy operator");

of("", 0, "first truth", 69).pipe(firstTruthy()).subscribe(console.log);

console.log("Null filter operator");

from([0, 1, null, undefined, "test"]).pipe(nullFilter()).subscribe(console.log);

console.log("Debug operator");

of("myValue").pipe(debug("MyOperator")).subscribe();

console.log("Multiply operator");

from([1, 2, 3, 4, 5]).pipe(multiply(5)).subscribe(console.log);

console.log("MultiplyBy operator");

from([1, 2, 3, 4, 5])
  .pipe(multiplyBy([5, 10]))
  .subscribe(console.log);

console.log("Even multiplied operator");

interval(10).pipe(take(5), evenMultiplied(2)).subscribe(console.log);

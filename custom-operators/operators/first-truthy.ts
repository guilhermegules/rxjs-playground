import { MonoTypeOperatorFunction, pipe } from "rxjs";
import { first } from "rxjs/operators";

export const firstTruthy = (): MonoTypeOperatorFunction<any> =>
  pipe(first(Boolean));

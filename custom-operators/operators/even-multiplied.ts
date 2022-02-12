import { filter, map, MonoTypeOperatorFunction, pipe } from "rxjs";

export const evenMultiplied = (
  multiplier: number
): MonoTypeOperatorFunction<number> =>
  pipe(
    filter((value) => value % 2 === 0),
    map((value) => value * multiplier)
  );

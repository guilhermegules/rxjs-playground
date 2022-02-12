import { map, MonoTypeOperatorFunction, OperatorFunction } from "rxjs";

/**
 *
 * As the name suggests a mono type operator function is a function that works with a single type of data
 * the input and the output must be the same
 */
export function multiply(factor: number): MonoTypeOperatorFunction<number> {
  return (source) => source.pipe(map((value) => value * factor));
}

/**
 * In our domain, we know we always want more than one value from a source and using the OperatorFunction we can use that to reduce our duplicate code even more.
 * In this case we should use the OperatorFunction
 */
export function multiplyBy(
  factor: number | number[]
): OperatorFunction<number, number[]> {
  return (source) =>
    source.pipe(
      map((value) =>
        (Array.isArray(factor) ? factor : [factor]).map((f) => f * value)
      )
    );
}

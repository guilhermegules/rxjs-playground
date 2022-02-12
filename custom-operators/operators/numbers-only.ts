import { filter } from "rxjs";

export const numbersOnly = () =>
  filter((value: number | string) => typeof value === "number");

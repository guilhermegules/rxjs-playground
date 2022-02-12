import { map } from "rxjs";

export const sum = (number: number) => map((value: number) => value + number);

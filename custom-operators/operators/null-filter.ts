import { filter } from "rxjs";

export const nullFilter = () =>
  filter((value) => value !== null && value !== undefined);

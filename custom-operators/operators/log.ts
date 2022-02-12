import { Observable, tap } from "rxjs";

export const log = (source: Observable<any>) =>
  source.pipe(
    tap((value) => {
      if (typeof value === "object") {
        console.log(`log: ${JSON.stringify(value)}`);
        return;
      }

      console.log(`log: ${value}`);
    })
  );

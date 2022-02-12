import { tap } from "rxjs";

export const debug = (tag: string) =>
  tap({
    next: (value) => {
      console.log(
        `%c[${tag}: Next]`,
        "background: #009688; color: #fff; padding: 3px; font-size: 9px;",
        value
      );
    },
    error: (error) => {
      console.log(
        `%[${tag}: Error]`,
        "background: #E91E63; color: #fff; padding: 3px; font-size: 9px;",
        error
      );
    },
    complete: () => {
      console.log(
        `%c[${tag}]: Complete`,
        "background: #00BCD4; color: #fff; padding: 3px; font-size: 9px;"
      );
    },
  });

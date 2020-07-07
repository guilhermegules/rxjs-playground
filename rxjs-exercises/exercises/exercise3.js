const { from } = require("rxjs");
const { map } = require("rxjs/operators");

const grades = [6.7, 6.1, 7.5, 4.9, 9.8, 7];

from(grades)
  .pipe(
    map((grade) => (grade >= 6 ? "Approved" : "Reprobate")),
    map((status) => status[0])
  )
  .subscribe((grade) => console.log(grade));

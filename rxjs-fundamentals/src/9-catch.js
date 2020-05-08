import { of, Subject } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

const sub = new Subject()

sub
  .pipe(
    catchError(() => of('something broke, but we handled ir 🕶️')),
    retry(2)
  )
  .subscribe({
    next: (val) => console.log(val),
    error: (val) => console.log(val)
  })

sub.next('good')
sub.error('💥 broken!')

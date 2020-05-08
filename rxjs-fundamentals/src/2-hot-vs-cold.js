import { Observable } from 'rxjs'
import { shareReplay, publish } from 'rxjs/operators'

const cold = Observable.create((o) => o.next(Math.random()))

cold.subscribe((a) => console.log(`Subscriber a: ${a}`))
cold.subscribe((b) => console.log(`Subscriber b: ${b}`))

const hot = cold.pipe(shareReplay(1))

hot.subscribe(console.log)
hot.subscribe(console.log)

// alternative

const altHot = cold.pipe(publish())

altHot.subscribe((a) => console.log(`Subscriber a: ${a}`))
altHot.subscribe((b) => console.log(`Subscriber b: ${b}`))

altHot.connect()

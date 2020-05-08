import { of } from 'rxjs'
import { switchMap } from 'rxjs/operators'

// Simulated db call
const fetchOrders = async (userId) => {
  return `${userId}'s order data`
}

const user$ = of({ uid: Math.random() })

const order$ = user$.pipe(
  switchMap((user) => {
    return fetchOrders(user.uid)
  })
)

user$.subscribe(console.log)

order$.subscribe(console.log)

import { of } from 'rxjs'
import { map, tap } from 'rxjs/operators'

const source = of('Guilherme')

const tapped = source.pipe(
  tap(console.log),
  map(n => n.toUpperCase()),
  tap(console.log),
  map(n => `Hello 🐟 ${n}`),
  tap(async n => {
    await Promise.resolve()
    alert(n)
  })
)

tapped.subscribe()

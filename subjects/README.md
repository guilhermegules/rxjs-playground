# Subject

**What is a Subject?** Is a special type of observable, that allows values to be multicasted to many observers.

> A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmiters: they maintain a registry to many listeners

- **Every Subject is an Observable.** Given a Subject, you can subscribe to it, providing an Observer.

## Behavior Subject

One of the variants of Subjects is the `BehaviorSubject`, which has a notion of "the current value". It stores the latest value emitted to it's consumers, and whenever a new Observer subscribes, it will immediately receive the "current value" from the `BehaviorSubject`;

> BehaviorSubjects are useful for representing "values over time". for instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject

## Replay Subject

`ReplaySubject` is similar to `BehaviorSubject` in than it can send old values to new subscribers

> A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.

## Async Subject

The AsyncSubject is a Subject that only sends the last value of Observable to the observers.

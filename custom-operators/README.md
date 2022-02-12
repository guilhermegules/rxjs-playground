# RxJs Custom operators

## What is an RxJs operator ?

An operator is just a pure function that takes the source Observable as it's input and returns an Observable as its outputs, usually modified in some way. Basically it's just like valve in your plumbing, or a checkpoint on the highway, or a step in an factory assembly line. In most cases, custom operators will map and filter values in the stream, but they can also be used to produce a side-effects like logging. In brief, a pipeable operator is just **a function that takes a source Observable and returns an Observable**, for example:

```
const myOperator = () => (sourceObservable) => new Observable()
```

### Here a few common use cases form custom operators:

- Abstract complex code into understandable pure functions
- Implement logging and debugging
- Implement custom error handling
- Create utilities

## Creating custom operators for a domain

There are two types of operators that can be created - a `MonoTypeOperatorFunction` and `OperatorFunction` and all operators must do two things:

- Return a function which accepts ad its parameters a source from the previous Observable value in the stream
- Return a value of the same type for `MonoTypeOperatorFunction` or different for an `OperatorFunction` by using the source value with pipe

## Running

```
# for install all dependencies
npm install

# for start and show all console logs
npm start
```

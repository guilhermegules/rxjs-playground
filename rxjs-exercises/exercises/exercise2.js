const { Observable } = require("rxjs");

const observer = Observable.create((subscriber) => {
  subscriber.next("RxJS");
  subscriber.next("is");
  subscriber.next("a");
  subscriber.next("awesome");
  subscriber.next("library");

  if (Math.random() > 0.5) {
    subscriber.next("Yeaaaaah");
    subscriber.complete();
  } else {
    throw "Ops we get a error!";
  }
});

observer.subscribe(
  (text) => console.log(text),
  (err) => console.log(err),
  () => console.log("End of subscription")
);

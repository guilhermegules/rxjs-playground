const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");
const axios = require("axios");

function httpGet(url) {
  return Observable.create((subscriber) => {
    axios
      .get(url)
      .then((response) => {
        Array.isArray(response.data)
          ? response.data.forEach((element) => {
              subscriber.next(element);
            })
          : subscriber.next(response.data);
      })
      .then(() => subscriber.complete());
  });
}

httpGet("http://localhost:8080/films")
  .pipe(
    map((film) => film.Actors),
    map((actorsName) => actorsName.split(/\s*,\s*/g))
  )
  .subscribe((ActorsArray) => console.log(ActorsArray));

// Return all data from api
// httpGet("http://localhost:8080/films").subscribe((ActorsArray) =>
//   console.log(ActorsArray)
// );

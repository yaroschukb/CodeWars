
/*Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.
The method should return an array of sentences declaring the state or country and its capital.*/


let capitals = [{state: 'Maine', capital: 'Augusta'}]

function capital(capitals) {
  return capitals.map( e => `The capital of ${e.state || e.country} is ${e.capital}`
  );
}


// Use template literals, this (`The capital of ${e.state || e.country} is ${e.capital}`) replaces this => ('The capital of ' + (e.state || e.country) + ' is ' + e.capital')


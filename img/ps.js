function isPrime(integer) {
  if (integer <= 1) return false;
  for (i = 2; i < integer; i++) {
    if (integer % i === 0) return false;
  };
  return true
}


// TEST CASES
console.log(isPrime(1)); // false 
console.log(isPrime(29)); // true
console.log(isPrime(30)); // false
module.exports = function getZerosCount(number, base) {
	 const primeFactors = getPrimeFactors(base);
  return Math.min(...primeFactors.map(getZerosCountForPrime.bind(null, number, base)));
}
 function getPrimeFactors(num) {
  let primeFactors = [];
   let divider = 2;
  while (divider < num) {
    if (num % divider === 0) {
      num /= divider;
      if (primeFactors.indexOf(divider) === -1) {
        primeFactors.push(divider);
      }
    } else {
      ++divider;
    }
  }
  if (num !== 1) {
    primeFactors.push(num);
  }
  return primeFactors;
}
 function getZerosCountForPrime(number, base, prime) {
  let res = 0;
   let maxFactorNumber = 0;
  while (base % prime === 0) {
    base /= prime;
    ++maxFactorNumber;
  }
   while (number > 0) {
    number = Math.floor(number / prime);
    res += number;
  }
  
  return Math.floor(res / maxFactorNumber);

}

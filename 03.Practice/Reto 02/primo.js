export default function esPrimo(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }

  let limite = Math.sqrt(n);
  for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false

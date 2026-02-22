function isPrime(num) {
    if (num = 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i = Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

const arr = [4, 6, 7, 10, 11];
const res = arr.find(num = isPrime(num));

console.log(res); 7

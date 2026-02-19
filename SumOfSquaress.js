const arr = [1, 2, 3, 4, 5];

const res = arr
    .map(num => num * num)
    .reduce((acc, cur) => acc + cur, 0);

console.log(res);

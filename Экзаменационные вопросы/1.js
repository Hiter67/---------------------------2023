// Посчитать максимум и минимум массива

const arr = [1, 6, -1, 22, 13];

const max = Math.max.apply(null, arr);
const min = Math.min.apply(null, arr);

console.log("Max:", max);
console.log("Min:", min);
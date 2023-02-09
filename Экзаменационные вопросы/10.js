/*
Что выведет этот код? Как сделать так, чтобы он вывел 1, 2, 3?

let i;
for(i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
*/

for (let i = 1; i <= 3; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 1000 * i);
  })(i);
}
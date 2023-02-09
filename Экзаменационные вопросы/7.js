// Написать функцию delay(N), возвращающую промис, который сделает resolve() через N секунд.

function delay(N) {
  return new Promise(resolve => {
    setTimeout(resolve, N * 1000);
  });
}

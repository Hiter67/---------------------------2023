// Написать функцию, которая после вызова каждую секунду пишет в консоль очередное число Фибоначчи. 
// Так, в консоли будет: 0, 1, 1, 2, 3, 5, 8, 13...

let prev = 0;
let curr = 1;

function fibonacci() {
  console.log(prev);
  let next = prev + curr;
  prev = curr;
  curr = next;
}

setInterval(fibonacci, 1000);
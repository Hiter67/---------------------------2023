const decrementButton = document.querySelector("#decrement");
const incrementButton = document.querySelector("#increment");
const valueSpan = document.querySelector("#value");

let value = 0;

decrementButton.addEventListener("click", function() {
  value -= 1;
  valueSpan.textContent = value;
});

incrementButton.addEventListener("click", function() {
  value += 1;
  valueSpan.textContent = value;
});

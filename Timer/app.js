const input = document.querySelector("#timeInput");
const startBtn = document.querySelector("#startBtn");
const countdown = document.querySelector("#countdown");

startBtn.addEventListener("click", function() {
	let count = input.value;
	function startTimer() {
		count--;
		countdown.innerHTML = count;
		if (count === 0) {
			clearInterval(counter);
			countdown.innerHTML = "ВРЕМЯ ИСТЕКЛО";
		}
	}
	const counter = setInterval(startTimer, 1000);
});
const convertBtn = document.getElementById("convert-btn");
const inputNum = document.getElementById("input-num");
const fromBase = document.getElementById("from-base");
const toBase = document.getElementById("to-base");
const output = document.getElementById("output");

convertBtn.addEventListener("click", function () {
	const numStr = inputNum.value;
	const fb = fromBase.value;
	const tb = toBase.value;
	const convertedNum = parseInt(numStr, fb).toString(tb);
	
	output.innerHTML = `Результат: ${convertedNum}`;
});
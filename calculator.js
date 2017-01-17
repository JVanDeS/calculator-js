//nummer in het scherm
function addNumber(i) {
	var display = document.getElementsByClassName('display')[0];
	display.innerHTML = display.innerHTML + i;
	number2 = display.innerHTML;
}
//nummer in het scherm
function addNumber(i) {
	var screen = document.getElementsByClassName('screen')[0];
	screen.innerHTML = screen.innerHTML + i;
	number2 = screen.innerHTML;
}
// Функция получает массив dom элементов
// И задаём им высоту равной их ширине.
function setHeightByWidth(elems) {
	elems.forEach = [].forEach;

	elems.forEach(function(e) {
		console.log(e);
		e.style.height = e.clientWidth + 'px';
	});
}

var stylesCards = document.querySelectorAll('.styles_card');
console.log(stylesCards)
setHeightByWidth(stylesCards);
// Функция получает массив dom элементов
// И задаём им высоту равной их ширине.
function setHeightByWidth(elems) {
	elems.forEach = [].forEach;

	elems.forEach(function(e) {
		e.style.height = e.clientWidth + 'px';

		e.addEventListener('mouseenter', function() {
			e.style.zIndex = 10000;
		});
		e.addEventListener('mouseleave', function() {
			setTimeout(function(){
				e.style.zIndex = 1;
			}, 200);
		});
	});
}

var stylesCards = document.querySelectorAll('.styles_card');
console.log(stylesCards)
setHeightByWidth(stylesCards);
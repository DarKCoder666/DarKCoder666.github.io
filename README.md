<h1 align="center">Слайдер для картинок.</h1>

В HTML должна быть следующая разметка:
	div#sliderWrap <br>
		img[src="1.jpg"] <br>
		img[src="2.jpg"] <br>
		img[src="3.jpg"] <br>
		img[src="4.jpg"] <br><br><br>
Слайдер активируется по вызову функции конструктора:
<pre>
var slider1 = new TheSlider({ 
	sliderWrapId: 'sliderWrap',
	width: 500,
	autoplay: true,
	duration: 400,
	intervalTime: 4000,
	switches: true,
	arrow: 'arrow.png'
});
</pre><br><br>

Где <b>sliderWrapId</b> - Id блока где хранятся картинки для слайдера, <br>
    <b>width</b> - ширина слайдера и картинок, может принимать значения как в px, так и в %. (Если в px, то необходимо указать только число, если %, то так и передаём '40%'). <br>
    <b>autoplay</b> - работа слайдера в автоматическом режиме, принимает булевые значения.<br>
    <b>duration</b> - время протекания анимации, принимает время в милисекундах.<br>
    <b>intervalTime</b> - интервал между переходом слайдов, принимает время в милисекундах.<br>
    <b>switches</b> - контроллеры, принимает булевые значения<br>
    <b>arrow</b> - стрелка для переключения слайдов, принимает ссылку на картинку.<br><br>


Если тот или инной параметр не задан, берётся значение по умолчанию:<br>
		
		width = 50%,
		autoplay = true,
		intervalTime = 3000,
		duration = 500,
		switches = true,
		arrow = 'https://cdn4.iconfinder.com/data/icons/ui-icon-part-3/131/slider-512.png';

console.log('hello');

$('.addBlue').click(function () {
	$('.box').addClass('blue');
});

$('.removeBlue').click(function () {
	$('.box').removeClass('blue');
});

$('.makeInvisible').click(function () {
	$('.box').addClass('invisible');
});

$('.makeVisible').click(function () {
	$('.box').removeClass('invisible');
});
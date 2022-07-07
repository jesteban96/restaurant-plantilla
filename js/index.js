$(document).ready(function(){

	//efecto menu
	$('.menu a').each(function(index,elemento){
		$(this).css({
			'top': '-100px'
		});

		$(this).animate({
			top:'0'
		},1000+(index*500));
	});

	//efecto header
	if($(window).width()>800){
		$('header .textos').css({
			opacity:0,
			marginTop:0
		});

		$('header .textos').animate({
			opacity:1,
			marginTop:'-52px'
		},1000);

	}

/// scroll elementos menu
	
	var acercade = $('#acerca-de').offset().top;
	var menu = $('#platillos').offset().top;
	var galeria = $('#galeria').offset().top;
	var ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:acercade
		},500);
	});

	$('#btn-menu').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:menu
		},500);
	});
	$('#btn-galeria').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:galeria
		},500);
	});
	$('#btn-ubicacion').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:ubicacion
		},500);
	});
	
});
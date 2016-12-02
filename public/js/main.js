(function ( w, d, n) {
	
	'use strict';

	enrutador
		.addRuta({
			ruta: '/',
			plantilla: 'views/inicio.html',
			controlador: null,
			load: function () {
				acciones.runTabs();
			}
		})

		.addRuta({
			ruta: '/Integrantes',
			plantilla: 'views/integrantes.html',
			controlador: null,
			load: function () {
				acciones.runTabs();
			}
		})

		.addRuta({
			ruta: '/Acerca',
			plantilla: 'views/acerca.html',
			controlador: null,
			load: function () {
				acciones.runTabs();
			}
		})

		.addRuta({
			ruta: '/Contactos',
			plantilla: 'views/contactos.html',
			controlador: null,
			load: function () {
				acciones.runTabs();
				d.querySelector('#nombre').focus();
			}
		})

		.driverRoutes();

	w.addEventListener('hashchange', function (e) {
		enrutador.driverRoutes();
	}, false);

})( window, document, navigator );


btnIrArriba = document.querySelector('.scroll-up');

function arriba(evento){
	evento.preventDefault();
    $("body, html").animate({
        scrollTop: "0px"
    },300);
}

function main() {
	btnIrArriba.addEventListener( 'click', arriba );

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0 ) {
			$(".scroll-up").slideDown(300);
		} else{
			$(".scroll-up").slideUp(300);
		};
	});
}

window.addEventListener('load', main);
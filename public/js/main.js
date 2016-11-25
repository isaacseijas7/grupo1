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
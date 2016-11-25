(function ( w, d, n, xhr ) {
	
	'use strict';

	let rutas = {};

	class Enrutador{

		constructor( marco ){
			this.marco = marco;
			this.controladores = {};
			this.ctrlActual = {};
		}

		addRuta(objRuta){
			rutas[objRuta.ruta] = {
				plantilla: objRuta.plantilla, 
				controlador: objRuta.controlador, 
				load: objRuta.load
			}
			return this;
		}

		driverRoutes(){
			let hash = w.location.hash.substring(1) || '/',
				destino = rutas[hash],
				self = this;

			if (destino.controlador) {
				this.ctrlActual = this.controladores[destino.controlador].controlador;
			}

			if (destino && destino.plantilla) {
				xhr.ejecutar({
					type: 'GET',
					url: destino.plantilla,
					data: null,
					loading: function () {
						self.marco.innerHTML = 'Cargando vista...';
					},
					success: function (datos) {
						self.marco.innerHTML = datos;

						if ( typeof destino.load === 'function' ) {
							destino.load();
						}

					}
				});
			}
		}

		addController(objController){
			this.controladores[objController.nombre] = {'controlador': objController.ctrl}
		}

		getCtrl() {
			return this.ctrlActual;
		}

	}

	if (typeof w.enrutador==='undefined') {
		w.enrutador = new Enrutador(d.querySelector('[data-vistas]'));

	}else {
		console.log('Ya existe la librería ajax');
	}

})( window, document, navigator, ajax );
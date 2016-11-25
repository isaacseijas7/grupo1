(function ( w, d, n ) {
	
	'use strict';

	class Acciones{
		
		constructor(){

		}

		mensajes( msj, tipo = 'ok' ){
			let mensaje  = 	`<div class="mensaje__contenedor ${tipo}">
								<span class="btn_mensaje_cerrar" onclick="this.parentNode.style.display = 'none'">X</span>
								<div class="mensaje">
									${msj}
								</div>
							</div>`;
			return mensaje;
		}

		getEdad(fecha){
			var fechaNac = new Date(fecha);
		    var fechaActual = new Date();
		    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();

		    fechaNac.setFullYear(fechaActual.getFullYear());

		    if (fechaActual < fechaNac){
		        edad--;
		    }

		    return edad;
		}

		runTabs(){

			let item = Array.prototype.slice.apply(d.querySelectorAll('.list-group-item')),
					panels = Array.prototype.slice.apply(d.querySelectorAll('.panels__item'));

			d.querySelector('.content_items').addEventListener('click', e => {
				e.preventDefault();
				if(e.target.classList.contains('list-group-item')){ //e.target.tagName == 'LI'
					let i = item.indexOf(e.target);
					item.map(tab => tab.classList.remove('active'));
					item[i].classList.add('active');

					panels.map(panel => panel.classList.remove('active'));
					panels[i].classList.add('active');
				}
			}, false);

		}

	}

	if (typeof w.acciones==='undefined') {
		w.acciones = new Acciones();
	}else {
		console.log('Ya existe la librería acciones');
	}

})( window, document, navigator );
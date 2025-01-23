/*const lista = document.getElementById('lista');

Sortable.create(lista, {
	animation: 150,
	chosenClass: "seleccionado",
	// ghostClass: "fantasma"
	dragClass: "drag",

	onEnd: () => {
		console.log('Se inserto un elemento');
	},
	group: "lista-personas",
	store: {
		// Guardamos el orden de la lista
		set: (sortable) => {
			const orden = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, orden.join('|'));
		},

		// Obtenemos el orden de la lista
		get: (sortable) => {
			const orden = localStorage.getItem(sortable.options.group.name);
			return orden ? orden.split('|') : [];
		}
	}
});*/

const lista = document.getElementById('lista');
const lista2 = document.getElementById('lista2');

Sortable.create(lista, {
	group: 'lista-personas', // set both lists to same group
	animation: 150,
	chosenClass: "seleccionado",
	dragClass: "drag",

	onEnd: () => {
		console.log('Se insertó un elemento en lista');
	},
	store: {
		// Guardamos el orden de la lista 1
		set: (sortable) => {
			const orden = sortable.toArray(); // obtenemos los id de los elementos de la lista 
			localStorage.setItem('orden-lista', JSON.stringify({
				orden: orden,
				lista: 'lista'  // Guardamos como un nombre de lista, no como referencia del DOM
			}));
		},

		// Obtenemos el orden de la lista 1
		get: (sortable) => {
			const data = localStorage.getItem('orden-lista');
			return data ? JSON.parse(data).orden : [];
		}
	}
});

Sortable.create(lista2, {
	group: 'lista-personas', // set both lists to same group
	animation: 150,
	chosenClass: "seleccionado",
	dragClass: "drag",

	onEnd: () => {
		console.log('Se insertó un elemento en lista2');
	},
	store: {
		// Guardamos el orden de la lista 2
		set: (sortable) => {
			const orden = sortable.toArray(); // obtenemos los id de los elementos de la lista 
			localStorage.setItem('orden-lista2', JSON.stringify({
				orden: orden,
				lista: 'lista2'  // Guardamos como nombre de lista
			}));
		},

		// Obtenemos el orden de la lista 2
		get: (sortable) => {
			const data = localStorage.getItem('orden-lista2');
			return data ? JSON.parse(data).orden : [];
		}
	}
});

// Evento y validación: Al recargar la página, los elementos se restauran en el orden según la lista en la que fueron cambiados
window.addEventListener('load', () => {
	// Obtener los elementos de ambas listas desde LocalStorage
	const listaData = localStorage.getItem('orden-lista');
	const listaData2 = localStorage.getItem('orden-lista2');

	// Restaurar los elementos de la lista 1
	if (listaData) {
		const { orden, lista } = JSON.parse(listaData);
		if (lista === 'lista') {
			orden.forEach(id => {
				const element = document.getElementById(id);
				if (element) {
					lista.appendChild(element);  // Asegura que los elementos se agreguen en la lista correcta
				}
			});
		}
	}

	// Restaurar los elementos de la lista 2
	if (listaData2) {
		const { orden, lista } = JSON.parse(listaData2);
		if (lista === 'lista2') {
			orden.forEach(id => {
				const element = document.getElementById(id);
				if (element) {
					lista2.appendChild(element);  // Asegura que los elementos se agreguen en la lista correcta
				}
			});
		}
	}
});

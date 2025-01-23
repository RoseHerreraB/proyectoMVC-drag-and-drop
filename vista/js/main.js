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
});


Sortable.create(lista2, {
	group: 'lista-personas', // set both lists to same group
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
});

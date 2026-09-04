/**
 * Manipulacion de la interfaz
 * 1. Propiedad llamada innethtml dentro de ella podremos observar todo el html que vive dentro de la etiqueta seleccionada
 * !Si lo usamos sin cuidado podemos borrar todo lo que estaba
 * !No usar innerhtml para renderizar solo texto si estoy recibiendo y mostrando
 * inmediatamente (propenso a inyeccion de html)
 * 2. Propiedad llamada textContent esa solo mostrara el texto que tiene dentro
 */

console.log(mainEl.innerHTML);
console.log("XXXXXXXXXXXXXXX");
console.log(mainEl.textContent);

mainEl.innerHTML += "<h1>Hola CH71</h1>";
mainEl.innerHTML += card; //Se agrega el += para no remplazar todo lo anterior si no para poder agregar a lo anterior
console.log(mainEl.innerHTML);

// mainEl.textContent += "hola";
// mainEl.textContent = card;

/**
 * inset Adjacent HTML
 * Permite insertar html en el contenedor sin borrar lo que ya esta y en una posicion especifica, tiene 4 posiciones
 * 1. beforebegin
 * 2. beforeend
 * 3. afterbeging
 * 4. afterend
 */

mainEl.insertAdjacentHTML("afterbegin", "<h1>Hola mundo</h1>");

mainEl.insertAdjacentHTML("afterend", "<h1>Hola mundo</h1>");

mainEl.insertAdjacentHTML("beforebegin", "<h1>Hola mundo</h1>");

mainEl.insertAdjacentHTML("beforeend", "<h1>Hola mundo</h1>");

mainEl.insertAdjacentHTML("beforeend", card);
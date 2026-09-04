/**
 * Todo lo que seleccionamos al principio
 * debe ser seleccionado mediante el documento 
 * 
 * Opciones de seleccion 
 * Clasicas
 * getElementByld
 * getElementsByClassName
 * 
 * Modernas
 * Nos permite seleccionar por un selector CSS
 * selectores CSS
 * - Etiqueta por ejemplo form
 * - Clase . por ejemplo .form-control
 * - Id # por ejemplo #title
 * 
 * querySelector() // Si usammos un selecto como clase solo va selecionar la primera coincidencia 
 * querySelectorAll // Todas
 */

const formEl = document.getElementById("album-form");
// console.log(formEl);
const mainEl = document.querySelector("#albun-container")
// console.log(mainEl);

/** Eventos
 * Es cualquiera accion que realiza el usuario en la pagina web
 * Escuchar por el evento
 * Escuchamos por el evento para que cuando ocurra desencadene una respuesta 
 * 
 * Pasos para extraer la info del formulario
 * 1. Agregar un event listener del evento submit
 * 2. Prevenir el comportamiento por defaul
 * 3. Construir un form data dandole el elemento formulario
 * 4. Extraer la informacion  del fromData y guarda en un array de arrays usando el spread operator
 * Nota:
 * ...
 * El spread operator desempaqueta la informacion de un iterable y la guarda en otro, es decir, sacar toda la informacion de un metodo para convertirla en datos de un array.
 * 5. Crear un objeto con la informacion usando Object.fromEntries()
 * object from entries recibe un array de arrays
 */

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    console.log(formData);
    console.log(formData.get("title")); //Extraer solo 1 elemento
    const dataArray = [...formData];
    console.log(dataArray);
    const dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);

    // const album = Object.fromEntries([... new FormData(formEl)]);
    // console.log(album);

});

const card = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `;

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

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
const albun = [];

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
    // console.log(formData);
    // console.log(formData.get("title")); //Extraer solo 1 elemento
    const dataArray = [...formData];
    // console.log(dataArray);
    const dataObject = Object.fromEntries(dataArray);
    // console.log(dataObject);
    // const album = Object.fromEntries([... new FormData(formEl)]);
    // console.log(album);
    //Obtener informacion para rendelizarlo en el html

    /**
     * crear un array para almacenar los albums
     * 1. cada que creemos un album guardarlo en el array
     * 2. renderizar todos los albums del array, no solo uno
     * 3.  Usar localstorage para almacenar la info
     * 4. obtener la informacion guardada y mostrarla por si el usuario actualiza
     */

    albun.push(dataObject); //Paso 1.
    console.log(albun);
    //Limpiamos antes de volver a renderizar las cards, para poder evitar la acumulacion
    mainEl.innerHTML = "";
    //Limpiamos todas las cards dentro del array de albums
    albun.map((albun)=> renderCard(albun, mainEl)); // Renderiza las cards dentro del arreglo donde las estamos guardando
    // renderCard(dataObject, mainEl);
    formEl.reset();
    console.log(albun);
});

const renderCard = (albunObject, htmlElement) => {
    const card = `
    <div class="card mb-3" style="width: 19rem;">
        <div class="card-body">
            <h5 class="card-title">${albunObject.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${albunObject.artis}</h6>
            <p class="card-text">${albunObject.genre}</p>
            <a href="#" class="card-link">Año de lanzamiento: ${albunObject.year}</a>
            <a href="#" class="card-link">Rating: ${albunObject.rating}</a>
        </div>
    </div>
    `;
    htmlElement.insertAdjacentHTML("beforeend", card);
}
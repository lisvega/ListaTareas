// aqui basicamente va el Todo  que quiero agregar
const input = document.querySelector("input");
//Este es el boton para añadir una tarea
const addBtn = document.querySelector(".btn-add");
// la ul es la lista donde vamos agregar todos los elementos
const ul = document.querySelector("ul");
//este es el parrafo que se va a mostrar cuando no hay ni una tarea
const empty = document.querySelector(".empty");

//aqui se agrega un AddEventlistener al boton, a este paso cada ves que escribo algo solo se recarga la pagina
// y esto se debe a que el boton esta dentro del form en el html y eso hace como que estuvieramos mandandolo algun lado
addBtn.addEventListener("click", (e) => {
    // entonces se crea este para que no se recargue la pagina
    e.preventDefault();

    //se agtregó una variable una para cuando se cuando se pique e boton + agarre el valor que este actualmente
    // en el imput y lo guarde en esa variable.
    const text = input.value;


    // aqui se agregó esta condicional que va a checar que el valor del imput no esté en blanco
    if (text !== "") {

        /*aqui se creó la li y un parrafo que es el que va a tener el texto del li */
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        //al li se le pone el metodo appendChild para añadirle el parrafo
        li.appendChild(p);

        //aqui llama a la función y lo va aádir al li
        li.appendChild(addDeleteBtn());

        //aqui al ul le paso el li
        ul.appendChild(li);

        //cada vez que piquemos el boton de añadir el valor del imput se va hacer blanco para que no se quede la tarea que escribimos
        //ahi en el input y no tengamos que borrala cada vez que querramos agregar una nueva tarea.
        input.value = "";


        //cada vez que piquemos el boton de añadir sig que estamos añadiendo un elemento a la lista
        empty.style.display = "none";
    }
});

//se creó una función addDelete para que el codigo no estetodo amontonado
function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";


    //creamos el ddEventListener y le añadimos el (e)evento y creamos una variable
    // iten que es igual e.target.parentElement, lo cual se refiere al boton que estamos picando, cuando picamos el boton de tache x (e.target) se refier al boton
    //y lo que queremos eliminar no es el boton, si no el elemnto de arriba que es el (li) y lo agarramos con (parentElement).
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;

        //para poder eliminar no podemos eliminar un objeto del Dom y eliminarlo directamente, tenemos que eliminarlo desde el papá por eso agarramos el ul que es padre del li.
        ul.removeChild(item);


        //aqui se creó esta variable para que cada ves que se borre un boton lo vamos a checar que es el ultimo o que ya no hay
        // más elementos en la lista. 
        const items = document.querySelectorAll("li");


        //aqui agregamos una condición donde checamos la li, que si es igual a 0 sig que ahora no hay elementos en la lista por lo tanto el parrafo que nos dice
        // que no tenemos tareas pendientes, nos dice que lo tenemos que volver a ver.
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}
const formTarea = document.querySelector('#formTarea');
const contenedorCards = document.getElementById('contenedorCards');
const btnClose = document.querySelector('#btnClose');
const listaDeTareas = [];

const crearLista = (textoTarea, indice) => {
    let contenedor = document.createElement('div');
    contenedor.className = 'col-md-4 col-lg-3';
    contenedor.id = indice;

    let cardTarea = `<div class="card mt-2">
    <div class="card-header d-flex justify-content-between align-items-center">
        <p class="m-0">📌</p>
        <button class="btn btn-close" id="btnEliminar" onclick="eliminarTarea(${indice})"></button>
    </div>
    <div class="card-body">
        <p>${textoTarea}</p>
    </div>
</div>`;

    contenedor.innerHTML = cardTarea;

    contenedorCards.appendChild(contenedor);
    document.querySelector('#tarea').value = "";
}

const addTarea = (e) =>{
    e.preventDefault();
    const textoTarea = document.getElementById('tarea').value;
    listaDeTareas.push(textoTarea);

    crearLista(textoTarea, listaDeTareas.length -1);
}

const eliminarTarea = (indice) => {
    listaDeTareas.splice(indice, 1);

    // Eliminar la tarea del DOM
    const tareaEliminada = document.getElementById(indice);
    tareaEliminada.remove();
}

formTarea.addEventListener('submit', addTarea);

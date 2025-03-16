
const inputAmigo = document.getElementById('amigo'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado'); 
const buttonAdd = document.querySelector('.button-add'); 
const buttonDraw = document.querySelector('.button-draw'); 


let amigos = [];


function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); 

   
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }


    amigos.push(nombre);

    
    inputAmigo.value = '';


    actualizarListaAmigos();

    
    inputAmigo.focus();
}


function actualizarListaAmigos() {
    
    listaAmigos.innerHTML = '';

  
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('No hay nombres en la lista. Agrega al menos un amigo.');
        return;
    }

 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

  
    resultado.innerHTML = `<li>El amigo seleccionado es: <strong>${amigoSeleccionado}</strong></li>`;
}


buttonAdd.addEventListener('click', agregarAmigo); 
buttonDraw.addEventListener('click', sortearAmigo); 


inputAmigo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});
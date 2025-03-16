const inputAmigo = document.getElementById('amigo'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado'); 
const buttonAdd = document.querySelector('.button-add'); 
const buttonDraw = document.querySelector('.button-draw'); 
const errorMessage = document.createElement('div'); 


errorMessage.style.color = 'red';
errorMessage.style.fontSize = '14px';
errorMessage.style.marginTop = '10px';
errorMessage.style.display = 'none'; 
document.querySelector('.input-section').appendChild(errorMessage); 
let amigos = [];



function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); 
    if (nombre === '') {
        errorMessage.textContent = 'Por favor, ingresa un nombre válido.';
        errorMessage.style.display = 'block'; 
        return;
    }


    errorMessage.style.display = 'none';

 
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
        errorMessage.textContent = 'No hay nombres en la lista. Agrega al menos un amigo.';
        errorMessage.style.display = 'block'; 
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
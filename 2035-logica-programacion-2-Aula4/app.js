let numeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let númeroMáximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
        let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let númeroGenerado = Math.floor(Math.random()*númeroMáximo)+1;
    //Si el número generado está incluido en la lista, hacemos una operación, sino, otra.
    console.log(númeroGenerado);
    console.log(listaNúmerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNúmerosSorteados.length == númeroMáximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNúmerosSorteados.includes(númeroGenerado)) {
        return generarNumeroSecreto();
     } else {
        listaNúmerosSorteados.push(númeroGenerado);
        return númeroGenerado;
        }
    }
}
function condicionesInciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${númeroMáximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Gener el número aleatorio
    //Iniciar el número de intentos
    condicionesInciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesInciales();
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
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
    return Math.floor(Math.random()*10)+1;
}

function condicionesInciales() {
    asignarTextoElemento('h1','Juego del número secreot!');
    asignarTextoElemento('p','Indica un número del 1 al 10');
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
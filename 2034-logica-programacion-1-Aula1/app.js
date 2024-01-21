//VARIABLES
let númeroMáximoPosible = 15;
let numeroSecreto = Math.floor(Math.random()*númeroMáximoPosible)+1;
let numeroUsuario = 0;
let intentos = 0;
let palabraIntentos = 'intento';
let máximosIntentos = 3;
while(numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre el 1 y el ${númeroMáximoPosible}, por favor`));
    
    console.log(typeof (numeroUsuario));
    /*
    Este codigo realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El numero es menor');
        }else {
            alert('El numero es mayor'); 
        }
        //Incrementas el contador
        intentos++;
        palabraIntentos = 'intentos';
        if(intentos == máximosIntentos) {
            alert(`Llegaste al número máximo de intentos, que son ${máximosIntentos}`);
            break;
        }
        //La condición, no se cumplió
        alert('Lo siento, no acertaste el número');

    }
}
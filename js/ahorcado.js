var palabrasSecretas = ["ALURA", "GONZALO", "ORACLE", "TECNOLOGIA", "EDUCACION", "DISCORD"];
var errores = 0;
var aciertos = 0;

var botonIniciar = document.getElementById("iniciar-juego");
botonIniciar.addEventListener("click", function(event){

    event.preventDefault();

    crearTablero();
    var palabraElejida = elejirPalabra(palabrasSecretas);
    dibujarGuiones(palabraElejida);
    verificarTeclaPresionada(palabraElejida);

});


//Función que elije una palabra al azar de las que haya cargada.
function elejirPalabra(palabrasSecretas){

    var validador = 1;

    while (validador == 1){

    var palabraElejida = palabrasSecretas[Math.round(Math.random()*palabrasSecretas.length)];

        if (palabraElejida == ""){

            validador = 1;

        } else {

            validador = 2;
        }

    }

    return palabraElejida;
}


// Función para verificar si la letra presionada es valida.
var letrasIngresadas = [""];
function verificarTeclaPresionada(palabraElejida){

    document.addEventListener("keydown", function(event){
            //event.preventDefault();
        if (errores < 7 && aciertos < palabraElejida.length){

            var letraIngresada = event.key.toUpperCase();

                //Utilizo también el length para que verifique que solo hay una letra porque si no me permite usar el alt, ctrl, etc.
                if (/[A-Z]/.test(letraIngresada) && letraIngresada.length == 1){

                    borrarMensaje();
                    var permiso = verificarTeclaRepetida(letraIngresada, letrasIngresadas);
                    letrasIngresadas = letrasIngresadas + letraIngresada;

                    if (permiso){

                        borrarMensaje();
                        dibujarMensaje("Ya ingresaste esa letra.", "red");

                    } else {

                        borrarMensaje();
                        verificarLetraCorrecta(letraIngresada, palabraElejida);
                        //console.log(aciertos);
                        console.log(errores);
                    }
                } else {

                    borrarMensaje();
                    dibujarMensaje("Recuerda, solo se permiten letras.", "red") 
                } 
        }
    }); 
    
}
    


//Función para verficar si la letra ingresada es correcta o no.
function verificarLetraCorrecta(letraIngresada, palabraElejida){
    var bandera = false;

    for (var j = 0; j < palabraElejida.length; j++){   

            if (letraIngresada == palabraElejida[j]){

                aciertos++;
                dibujarLetraCorrecta(letraIngresada, j);
                bandera = true;
            }
    }

    if (!bandera) {

        errores++;
        dibujarLetraIncorrecta(letraIngresada, errores);
        dibujarError();
    }
}

//Función que dibuja el error que toca.
function dibujarError(){

    if (errores == 1) {
        dibujarHorca();
    }
    if (errores == 2) {
        dibujarCabeza();
    }
    if (errores == 3) {
        dibujarCuerpo();
    }
    if (errores == 4) {
        dibujarBrazoD();
    }
    if (errores == 5) {
        dibujarBrazoI();
    }
    if (errores == 6) {
        dibujarPiernaD();
    }
    if (errores == 7) {
        dibujarPiernaI();
    }
}

//Función para saber si se repite o no la letra que ingreso.
function verificarTeclaRepetida(letraIngresada, letrasIngresadas){

    var repetida = false;

    for (var a = 0; a < letrasIngresadas.length; a++){
        
        if (letraIngresada == letrasIngresadas[a]){

            repetida = true;
            break;
        
        } else {

            repetida = false;
        }
    }

    return repetida;
}

function comprobarFinPerdio(){

    if (errores > 6){
        
        return true;
    }
}

function comprobarFinGano(){    
    if (aciertos == palabraElejida.length){

        return true;
    }
}
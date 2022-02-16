var palabrasSecretas = ["ALURA", "GONZALO", "ORACLE", "TECNOLOGIA", "EDUCACION", "DISCORD"];
var errores = 0;
var aciertos = 0;
var palabraElejida = "";
var palabraAntigua = "";
var letrasIngresadas = [""];

var botonIniciar = document.getElementById("iniciar-juego");
botonIniciar.addEventListener("click", function(evt){

    evt.preventDefault();

    errores = 0;
    aciertos = 0;
    letrasIngresadas = [""];

    crearTablero();
    palabraElejida = elejirPalabra(palabrasSecretas);
    dibujarGuiones(palabraElejida);
    verificarTeclaPresionada();

});


//Función que elije una palabra al azar de las que haya cargada.
function elejirPalabra(palabrasSecretas){

    var validador = 1;

    while (validador == 1){

    var palabra = palabrasSecretas[Math.floor(Math.random()*palabrasSecretas.length)];

        if (palabra == "" || palabraAntigua == palabra){

            validador = 1;

        } else {

            validador = 2;
        }

    }

    palabraAntigua = palabra;
    return palabra;
}


// Función para verificar si la letra presionada es valida.
function verificarTeclaPresionada(){

        document.addEventListener("keydown", function teclaPresionada(event){

       //Comprobacion para saber que todavia no haya perdido o ganado.
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
                    }
                } else {

                    borrarMensaje();
                    dibujarMensaje("Recuerda, solo se permiten letras.", "red") 
                } 
        }  

        //En caso de haber perdido o ganado lanzar su correspondiente mensaje.
        if (errores == 7){

            borrarMensaje();
            dibujarMensaje("¡Haz perdido!", "red");
            divPrimero.style.display = "block";
            divSegundo.style.display = "block"
            botonIniciar.textContent = "Jugar de nuevo";

           document.removeEventListener("keydown", teclaPresionada);

        } if(aciertos == palabraElejida.length) {

            borrarMensaje();
            dibujarMensaje("¡Haz ganado! Felicitaciones", "green");
            divPrimero.style.display = "block";
            divSegundo.style.display = "block"
            botonIniciar.textContent = "Jugar de nuevo";

            document.removeEventListener("keydown", teclaPresionada);

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
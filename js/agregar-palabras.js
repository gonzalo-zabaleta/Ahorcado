var numeros = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 , 9];
var botonNuevaPalabra = document.getElementById("nueva-palabra");
botonNuevaPalabra.addEventListener("click", agregarPalabra);

function agregarPalabra(){

    let input = document.getElementById("input-nueva-palabra");
    var palabraNueva = input.value.toUpperCase().trim();

  if (palabraNueva == "" || tieneNumeros(palabraNueva)){

    borrarMensaje();
    dibujarMensaje("Por favor, ingrese una palabra.", "red");

  } else {
        if (palabraRepetida(palabraNueva)){

            borrarMensaje()
            dibujarMensaje("Ya está agregada esa palabra.", "red");

        } else {

            borrarMensaje();
            dibujarMensaje("Palabra agregada exitosamente.", "green");
            palabrasSecretas.push(palabraNueva);
            input.value = "";
        }
    }
}

function palabraRepetida(palabraNueva){

    let parar = false;

    for (var m = 0; m < palabrasSecretas.length; m++){

        if (!parar){
            if (palabraNueva == palabrasSecretas[m]){

                parar = true;
                return true;        
            }
        } else {

            break;
        }
    }
}

function tieneNumeros(palabraNueva){

    let corte = false;

    for (let n = 0; n < palabraNueva.length; n++){

        if (!corte){
            for (let a = 0; a < numeros.length; a++){

                if (!corte){

                    if (palabraNueva[n] == numeros[a]){

                        corte = true;
                        return true;
                    }
                } else {
                    break;
                }
            }

        } else {
            break;
        }
    }  
}
var canvasTablero = document.getElementById("ahorcado");
var pincel = canvasTablero.getContext("2d");
var divPrimero = document.getElementById("div-primero");
var divSegundo = document.getElementById("div-segundo");

//Funcion que esconde los botones y crea el canvas con la base de la horca
function crearTablero(){

    divPrimero.style.display = "none";
    divSegundo.style.display = "none";

    pincel.clearRect(0, 0, 1200, 800);
    pincel.fillStyle = "black"
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(300, 500);
    pincel.lineTo(250, 550);
    pincel.lineTo(350, 550);
    pincel.lineTo(300, 500);
    pincel.stroke();
    pincel.closePath(); 
}


//Función que muestra los guiones de la palabra a adivinar.
function dibujarGuiones(palabra){
    for(var i=0; i<palabra.length;i++){
        pincel.beginPath();
        pincel.moveTo ((535 + i * 50), 550); 
        pincel.lineTo((565 + i * 50), 550);
        pincel.stroke();
        pincel.closePath();
    }                               
}

//Funcion para dibujar la letra correcta.
function dibujarLetraCorrecta (letraIngresada, posicion){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.font="40pt comic";
    pincel.fillText(letraIngresada, (535 + posicion * 50), 540);
    pincel.closePath();

}

//Funcion para dibujar la letra inconrrecta.
function dibujarLetraIncorrecta(letraIngresada, errores){

    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.font = "40pt comic";
    pincel.fillText(letraIngresada, (535 + errores * 50), 450);
    pincel.closePath();

}


function dibujarHorca(){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;

    pincel.moveTo(300, 500);
    pincel.lineTo(300, 250);
    pincel.lineTo(450, 250);
    pincel.lineTo(450, 300);
    pincel.stroke();

    pincel.closePath();

}  

function dibujarCabeza(){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;

    pincel.arc(450, 325, 25, 0, 2*Math.PI);
    pincel.stroke();

    pincel.closePath();
}

function dibujarCuerpo(){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;

    pincel.moveTo(450, 350);
    pincel.lineTo(450, 450);
    pincel.stroke();

    pincel.closePath();
}

function dibujarPiernaD(){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;

    pincel.moveTo(450, 450);
    pincel.lineTo(500, 500);
    pincel.stroke();

    pincel.closePath();
}

function dibujarPiernaI(){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;

    pincel.moveTo(450, 450);
    pincel.lineTo(400, 500);
    pincel.stroke();

    pincel.closePath();
}

function dibujarBrazoI(){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;

    pincel.moveTo(450, 400);
    pincel.lineTo(400, 350);
    pincel.stroke();

    pincel.closePath();
}

function dibujarBrazoD(){

    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = 4;

    pincel.moveTo(450, 400);
    pincel.lineTo(500, 350);
    pincel.stroke();

    pincel.closePath();
}

function dibujarMensaje(frase, color){

    pincel.beginPath();
    pincel.fillStyle = color;
    pincel.font = "40pt comic";
    pincel.fillText(frase, 300, 200);
    pincel.closePath();
}

function borrarMensaje(){

    pincel.clearRect(0, 0, 1200, 220);
}

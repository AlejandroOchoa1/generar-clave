let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres =
    "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

const caracteresEspeciales = "!@#$%^&*()-_=+{}[]|:;<>,.?/~`";

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = "";
    let incluyeMayuscula = false;
    let incluyeCaracterEspecial = false;

    for (let i = 0; i < numeroDigitado - 2; i++) {
    //se incluye el menos 2, restamos 2 caracteres por la mayuscula y caracteres especial

    let caracterAleatorio =
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
    if ("ABCDEFGHIJKLMOPQRSTUVWXYZ".includes(caracterAleatorio)) {
      //si caracter aleatorio tiene alguna de las letras mayusculas es igual a 'TRUE'
        incluyeMayuscula = true;
    }
    password += caracterAleatorio;
    }

    if (!incluyeMayuscula) {
    password += "ABCDEFGHIJKLMOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
    } else {
    password +=
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
    }

    password += caracteresEspeciales[ Math.floor(Math.random() * caracteresEspeciales.length)];

    contrasena.value = password;
}

//Limpia input de cantidad e input de contrasena
function limpiar() {
    document.getElementById("cantidad").value = "";
    document.getElementById("contrasena").value = "";
}

// caracteres especiales

// validaciones que lleve mayuscual, numero, caracter especial

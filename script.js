const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".text__area__mensaje");
const botonCopiar = document.querySelector(".copiar");

// Función para aplicar el color al texto del área de texto
function cambiarColorTexto() {
    // Cambia el color del texto a la variable secundaria de CSS
    textArea.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-secundario').trim();
}

textArea.addEventListener('input', cambiarColorTexto);

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = matrizCodigo.length - 1; i >= 0; i--) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

botonCopiar.addEventListener("click", function () {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            // Opcional: Mostrar un mensaje de éxito o cambiar el estilo del botón
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            // Opcional: Manejo de errores
            console.error("Error al copiar el texto: ", err);
        });
});
// Función para pedir la temperatura y convertirla
function convertirTemperatura() {
    let entrada;
    let celsius;

    // Bucle para validar info ingresada por el usuario
    do {
        entrada = prompt("Por favor ingresa la temperatura en grados Celsius: ");
        // Si el usuario da clic en cancelar, se detiene el programa
        if (entrada === null) {
            alert ("Operación cancelada por el usuario");
            return;
        }
        // Convertimos la entrada (string) a número flotante
        celsius = Number (entrada);
        //Verificamos que la entrada sea valida
        if (entrada.trim() === '' || isNaN(celsius)) {
            alert("Error: debes ingresar un valor numérico válido. Inténtalo de nuevo.");
        }
    } while (entrada.trim() === '' || isNaN(celsius));  //Repite mientras sea válido
    //Cálculo
    const kelvin = celsius +273.15;
    const fahrenheit = (celsius * 1.8) + 32;

    //Imprimir en consola
    console.log (`Temperatura ingresada (Celsius): ${celsius}`);
    console.log (`Grados Kelvin: ${kelvin}`);
    console.log (`Grados Fahrenheit: ${fahrenheit}`);

    //Imprimir en el DOM
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
        <p><strong>Temperatura ingresada:</strong> ${celsius}°C</p>
        <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
        <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
    `;
}

convertirTemperatura();
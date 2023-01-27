let saldo = 10000; // saldo inicial
let pin = 1234; // código pin
let pinIngresado;
let cantidad;

do {
    pinIngresado = parseInt(prompt("Ingrese su PIN:"));
    if (pinIngresado !== pin) {
        alert("PIN incorrecto. Por favor, inténtelo de nuevo.");
    }
} while (pinIngresado !== pin);

do {
    let opcion = parseInt(prompt("¡Bienvenido! ¿Qué desea hacer? \n1. Revisar saldo \n2. Retirar dinero \n3. Salir"));
    switch (opcion) {
        case 1:
            alert("Su saldo actual es: $" + saldo);
            break;
        case 2:
            cantidad = parseInt(prompt("Ingrese la cantidad que desea retirar:"));
            if (cantidad > saldo) {
                alert("Fondos insuficientes. Por favor, ingrese una cantidad diferente.");
            } else {
                saldo -= cantidad;
                alert("Se han retirado $" + cantidad + ". Su nuevo saldo es: $" + saldo);
            }
            break;
        case 3:
            alert("Gracias por utilizar nuestro cajero automático. ¡Que tenga un excelente día!");
            break;
        default:
            alert("Opción inválida. Por favor, inténtelo de nuevo.");
    }
} while (opcion !== 3);

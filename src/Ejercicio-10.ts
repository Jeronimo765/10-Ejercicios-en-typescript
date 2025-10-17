type MetodoPago = "tarjeta" | "efectivo" | "transferencia";


type Pago =
    | { metodo: "tarjeta"; numeroTarjeta: string; cvv: string }
    | { metodo: "transferencia"; banco: string; numeroCuenta: string }
    | { metodo: "efectivo" };


function validarPago(pago: Pago): void {
    if (pago.metodo === "tarjeta") {
        if (!pago.numeroTarjeta || !pago.cvv) {
            console.log(" Faltan datos obligatorios para el pago con tarjeta.");
        } else {
            console.log("Pago con tarjeta válido.");
        }
    } else if (pago.metodo === "transferencia") {
        if (!pago.banco || !pago.numeroCuenta) {
            console.log("Faltan datos obligatorios para la transferencia.");
        } else {
            console.log("Pago por transferencia válido.");
        }
    } else if (pago.metodo === "efectivo") {
        console.log("Pago en efectivo (no requiere datos adicionales).");
    } else {
        console.log("Método de pago no reconocido.");
    }
}


const pago1: Pago = { metodo: "tarjeta", numeroTarjeta: "1234-5678-9012-3456", cvv: "123" };
const pago2: Pago = { metodo: "transferencia", banco: "Bancolombia", numeroCuenta: "987654321" };
const pago3: Pago = { metodo: "efectivo" };
const pago4: Pago = { metodo: "tarjeta", numeroTarjeta: "", cvv: "" };


validarPago(pago1);
validarPago(pago2);
validarPago(pago3);
validarPago(pago4);

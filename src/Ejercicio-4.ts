interface CampoFormulario {
    nombre: string;
    tipo: "texto" | "numero" | "email";
    valor: string | number;
}

function validarCampos(campos: CampoFormulario[]): string[] {
    const camposInvalidos: string[] = [];

    for (const campo of campos) {
        if (campo.tipo === "texto") {
            if (typeof campo.valor !== "string" || campo.valor.trim() === "") {
                camposInvalidos.push(campo.nombre);
            }
        }
        else if (campo.tipo === "numero") {
            if (typeof campo.valor !== "number" || isNaN(campo.valor)) {
                camposInvalidos.push(campo.nombre);
            }
        }
        else if (campo.tipo === "email") {
            const email = String(campo.valor);
            if (!email.includes("@") || !email.includes(".")) {
                camposInvalidos.push(campo.nombre);
            }
        }
    }

    return camposInvalidos;
}


const campos: CampoFormulario[] = [
    { nombre: "nombre", tipo: "texto", valor: "Jeronimo" },
    { nombre: "edad", tipo: "numero", valor: 20 },
    { nombre: "correo", tipo: "email", valor: "jeronimo123@gmail.com" },
    { nombre: "telefono", tipo: "numero", valor: "no es número" },
    { nombre: "comentario", tipo: "texto", valor: "" },
    { nombre: "contacto", tipo: "email", valor: "correoSinArroba" }
];


const resultado = validarCampos(campos);
console.log("Campos inválidos:", resultado);


type Transaccion = {
    monto: number;
    tipo: "ingreso" | "egreso";
    categoria: string;
};


function agruparPorTipo(transacciones: Transaccion[]): { ingreso: number; egreso: number } {

    const resultado = { ingreso: 0, egreso: 0 };


    for (const transaccion of transacciones) {
        if (transaccion.tipo === "ingreso") {
            resultado.ingreso += transaccion.monto;
        } else if (transaccion.tipo === "egreso") {
            resultado.egreso += transaccion.monto;
        }
    }


    return resultado;
}

const transacciones: Transaccion[] = [
    { monto: 200000, tipo: "ingreso", categoria: "salario" },
    { monto: 150000, tipo: "ingreso", categoria: "venta" },
    { monto: 100000, tipo: "egreso", categoria: "alimentación" },
    { monto: 80000, tipo: "egreso", categoria: "transporte" },
];

const resultado = agruparPorTipo(transacciones);

console.log(resultado);



type TipoCambio = "nombre" | "correo" | "contraseña";

interface CambioUsuario {
    tipo: TipoCambio;
    fecha: string;
}

function resumenCambios(cambios: CambioUsuario[]): Record<TipoCambio, number>{
    const resumen: Record<TipoCambio, number> = {
        nombre: 0,
        correo: 0,
        contraseña: 0,
    };

    for (const cambio of cambios) {
        resumen[cambio.tipo]++;
    }

    return resumen;
}

const historial: CambioUsuario[] = [
    {tipo: "nombre", fecha: "2024-05-01"},
    {tipo: "correo", fecha: "2024-05-02"},
    {tipo: "nombre", fecha: "2024-05-03"},
    {tipo: "contraseña", fecha:"2024-06-01"},
    {tipo: "correo", fecha:"2024-06-05"},

];

const resultado = resumenCambios(historial);
console.log(resultado);
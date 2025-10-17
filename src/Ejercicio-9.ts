type Unidad = "cm" | "m" | "km" | "in" | "ft";

function convertirUnidad(valor: number, desde: Unidad, hacia: Unidad): number {
    if (valor < 0) {
        throw new Error("El valor no puede ser negativo");
    }

    let valorEnMetros: number;

    switch (desde) {
        case "cm":
            valorEnMetros = valor / 100;
            break;
        case "m":
            valorEnMetros = valor;
            break;
        case "km":
            valorEnMetros = valor * 1000;
            break;
        case "in":
            valorEnMetros = valor * 0.0254;
            break;
        case "ft":
            valorEnMetros = valor * 0.3048;
            break;
        default:
            throw new Error("Unidad de origen no válida");
    }

    let resultado: number;

    switch (hacia) {
        case "cm":
            resultado = valorEnMetros * 100;
            break;
        case "m":
            resultado = valorEnMetros;
            break;
        case "km":
            resultado = valorEnMetros / 1000;
            break;
        case "in":
            resultado = valorEnMetros / 0.0254;
            break;
        case "ft":
            resultado = valorEnMetros / 0.3048;
            break;
        default:
            throw new Error("Unidad de destino no válida");
    }

    return resultado;
}

try {
    console.log("100 cm a m:", convertirUnidad(100, "cm", "m"));
    console.log("5 km a m:", convertirUnidad(5, "km", "m"));
    console.log("10 ft a cm:", convertirUnidad(10, "ft", "cm"));
    console.log("25 in a m:", convertirUnidad(25, "in", "m"));
    console.log("1200 m a km:", convertirUnidad(1200, "m", "km"));
} catch (error) {
    console.error(error);
}

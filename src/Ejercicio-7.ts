type CategoriaProducto = "alimentos" | "tecnología" | "papelería";

interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: CategoriaProducto;
}

function tieneBajoStock(producto: Producto): boolean {
    switch (producto.categoria) {
        case "alimentos":
            return producto.cantidad < 20;
        case "tecnología":
            return producto.cantidad < 5;
        case "papelería":
            return producto.cantidad < 50;
        default:
            return false;
    }
}

const productos: Producto[] = [
    { id: 1, nombre: "Manzanas", cantidad: 15, categoria: "alimentos" },
    { id: 2, nombre: "Laptop", cantidad: 3, categoria: "tecnología" },
    { id: 3, nombre: "Cuadernos", cantidad: 60, categoria: "papelería" },
    { id: 4, nombre: "Galletas", cantidad: 25, categoria: "alimentos" },
    { id: 5, nombre: "Impresora", cantidad: 7, categoria: "tecnología" },
    { id: 6, nombre: "Hojas de papel", cantidad: 40, categoria: "papelería" },
];


for (const p of productos) {
    if (tieneBajoStock(p)) {
        console.log(`El producto "${p.nombre}" tiene bajo stock (${p.cantidad} unidades).`);
    } else {
        console.log(`El producto "${p.nombre}" tiene stock suficiente (${p.cantidad} unidades).`);
    }
}

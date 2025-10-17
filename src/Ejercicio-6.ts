type Categoria = "tareas" | "quices" | "examen";


interface Calificacion {
    estudianteId: number;
    materia: string;
    categoria: Categoria;
    nota: number;
}

function promedioPorCategoria(
    calificaciones: Calificacion[],
    estudianteId: number
): Record<Categoria, number> {
    const acumulados: Record<Categoria, { suma: number; cantidad: number }> = {
        tareas: { suma: 0, cantidad: 0 },
        quices: { suma: 0, cantidad: 0 },
        examen: { suma: 0, cantidad: 0 },
    };


    for (const calificacion of calificaciones) {
        if (calificacion.estudianteId === estudianteId) {
            acumulados[calificacion.categoria].suma += calificacion.nota;
            acumulados[calificacion.categoria].cantidad++;
        }
    }


    const promedios: Record<Categoria, number> = {
        tareas: 0,
        quices: 0,
        examen: 0,
    };

    for (const categoria in acumulados) {
        const { suma, cantidad } = acumulados[categoria as Categoria];
        promedios[categoria as Categoria] = cantidad > 0 ? suma / cantidad : 0;
    }

    return promedios;
}


const calificaciones: Calificacion[] = [
    { estudianteId: 1, materia: "Matemáticas", categoria: "tareas", nota: 4.5 },
    { estudianteId: 1, materia: "Matemáticas", categoria: "quices", nota: 3.8 },
    { estudianteId: 1, materia: "Matemáticas", categoria: "examen", nota: 4.0 },
    { estudianteId: 1, materia: "Historia", categoria: "tareas", nota: 5.0 },
    { estudianteId: 1, materia: "Historia", categoria: "examen", nota: 4.5 },
    { estudianteId: 2, materia: "Matemáticas", categoria: "tareas", nota: 3.0 },
];

const resultado = promedioPorCategoria(calificaciones, 1);
console.log(resultado);

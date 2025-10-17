interface Tarea1 {
    id: number;
    descripcion: string;
    completada: boolean;
    estado: "pendiente" | "en_progreso" | "finalizada";
}

class Tarea implements Tarea1{
    public id: number;
    public descripcion: string;
    public completada: boolean;
    public estado: "pendiente" | "en_progreso" | "finalizada";

    constructor(id: number, descripcion: string, completada: boolean, estado: "pendiente" | "en_progreso" | "finalizada" ){
        this.id = id;
        this.descripcion = descripcion;
        this.completada = completada;
        this.estado = estado;
    }
}

class Lista {
    listaTareas: Tarea1[];

    constructor(){
        this.listaTareas = [];
    }

    agregarTarea(tarea: Tarea1): void {
        this.listaTareas.push(tarea);
    }

    obtenerTareas(): Tarea1[] {
        return this.listaTareas.filter(
            (t) => t.estado === "pendiente" || t.estado === "en_progreso"
        );
    }
}

const lista = new Lista();
lista.agregarTarea(new Tarea(1, "Estudiar java", false, "pendiente"));
lista.agregarTarea(new Tarea(2, "Hacer Tarea de bases de datos", true, "en_progreso"));
lista.agregarTarea(new Tarea(3, "Hacer tarea de artes", true, "finalizada"));

console.log("Tareas realizadas");
console.log(lista.obtenerTareas());


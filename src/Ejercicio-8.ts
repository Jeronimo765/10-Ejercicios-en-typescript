type RolUsuario = "admin" | "editor" | "visitante";

interface Usuario {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: RolUsuario;
}

function filtrarUsuarios(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(
        (usuario) =>
            usuario.edad >= 18 && usuario.activo === true && usuario.rol !== "visitante"
    );
}

const listaUsuarios: Usuario[] = [
    { nombre: "Carlos", edad: 25, activo: true, rol: "admin" },
    { nombre: "Ana", edad: 17, activo: true, rol: "editor" },
    { nombre: "Lucía", edad: 30, activo: false, rol: "editor" },
    { nombre: "Pedro", edad: 22, activo: true, rol: "visitante" },
    { nombre: "María", edad: 28, activo: true, rol: "editor" },

];

const usuariosFiltrados = filtrarUsuarios(listaUsuarios);

console.log("Usuarios validos");
console.log(usuariosFiltrados);
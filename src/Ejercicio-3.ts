type NotificacionEmail = {
    tipo: "email";
    destinario: string;
    asunto: string;
    mensaje: string;
};

type NotificacionSMS = {
    tipo: "sms";
    numeroTelefono: string;
    contenido: string;
};

type NotificacionPush = {
    tipo: "push";
    dispositivoId: string;
    titulo: string;
    cuerpo: string;
};

type Notificacion = NotificacionEmail | NotificacionSMS | NotificacionPush;

function enviarNotificacion(notificacion: Notificacion): void {
    if (notificacion.tipo === "email") {
        console.log("Eviando Email");
        console.log(`Para: ${notificacion.destinario}`);
        console.log(`Mensaje: ${notificacion.asunto}`);
        console.log(`Asunto: ${notificacion.mensaje}`);

    }
    else if (notificacion.tipo === "sms") {
        console.log("Enviando SMS");
        console.log(`Numero: ${notificacion.numeroTelefono}`);
        console.log(`Contenido: ${notificacion.contenido}`)
    }

   else if (notificacion.tipo === "push") {
        console.log(" Enviando notificacion push");
        console.log(`Dispositivo ID: ${notificacion.dispositivoId}`);
        console.log(`Título: ${notificacion.titulo}`);
        console.log(`Cuerpo: ${notificacion.cuerpo}`);
    }
}

const email: NotificacionEmail = {
    tipo: "email",
    destinario: "jeroavila0@gmail.com",
    asunto: "Bienvenido a la plataforma",
    mensaje: "Gracias por registrarse en nuestro sitio",
};

const sms: NotificacionSMS = {
    tipo: "sms",
    numeroTelefono: "+57314565789",
    contenido: "Tu codigo de verificacion es 6751",
};

const push: NotificacionPush = {
    tipo: "push",
    dispositivoId: "ABC1234YZ",
    titulo: "Nueva actualizacion",
    cuerpo: "Tu aplicacion tiene una nueva version disponible",
};

enviarNotificacion(email);
enviarNotificacion(sms);
console.log(push);
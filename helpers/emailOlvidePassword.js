import nodemailer from "nodemailer";


const emailOlvidePassword = async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const { email, nombre, token } = datos;

    // enviar email

    const info = await transport.sendMail({
        from: 'APV - Administrador de pacientes de Veterinaria',
        to: email,
        subject: 'Reestablece tu Contraseña',
        text: 'Reestablece tu Contraseña',
        html: `<p>Hola: ${nombre}, has solicitado reestablecer tu contraseña.</p>
        <p>sigue el siguiente enlace para recuperar tu contraseña:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a> </p>

        <p>Si no creaste esta cuenta, puedes ignorar este mensaje</p>
        `
    });

    console.log(info.messageId);
    

};

export default emailOlvidePassword;
const { Router } = require('express')
const nodemailer = require('nodemailer')


const router = Router()

router.post('/contact', async(req, res) => {
    const { nombre, email, mensaje } = req.body

    contentHTML = `
       <h1>Informacion de usuario</h1>
       <ul>
          <li>Nombre y Apellido: ${nombre}<li>
          <li>Email: ${email}</li>
          <li>Mensaje: ${mensaje}</li>
       </ul>
    `
    const trnasporter = nodemailer.createTransport({
        host: 'mail.belihebe.com',
        port: 587,
        secure: false,
        auth: {
            user: 'contacto@belihebe.com',
            pass: 'belihebe2020'
        },
        tls: {
            rejectUnauthorized: false
        }
    })


    const info = await trnasporter.sendMail({
        from: "'Contacto - Perfildev'  <contacto@belihebe.com>",
        to: 'perfldev@gmail.com',
        subject: 'Formulario de contacto perfildev',
        html: contentHTML
    })

    console.log('Message the contact form', info.messageId)
    req.flash('contact', 'Se Enviado tu Mensaje con Exito 📧')
    res.redirect('/links/contact')
})

module.exports = router
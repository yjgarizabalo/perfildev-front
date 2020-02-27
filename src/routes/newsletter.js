const { Router } = require('express')
const nodemailer = require('nodemailer')


const router = Router()

router.post('/haz-parte', async (req, res) => {
   const { email } = req.body

   contentHTML = `
       <h1>Informacion de usuario</h1>
       <ul>
          <li>Email: ${ email }</li>
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
      from: "'Perfildev'  <contacto@belihebe.com>",
      to: 'perfldev@gmail.com',
      subject: 'Formulario newsletter perfildev',
      html: contentHTML
   })

   console.log('Message sent', info.messageId)
   req.flash('newsletter', 'Eres parte de Perfildev con Exito 😃')
   res.redirect('/#send-email')
})

module.exports = router

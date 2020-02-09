const { Router }  = require('express')
const  nodemailer = require('nodemailer')
const router = Router()

router.post('/send-email', async (req, res) => {
    const { email } = req.body

    contentHTML = `
       <h1>Informacion de usuario</h1>
       <ul>
          <li>Email: ${email}</li>
       </ul>
    `
    const trnasporter =  nodemailer.createTransport({
       host: 'mail.belihebe.com',
       port: 587,
       secure: false,
       auth: {
          user: 'test@belihebe.com',
          pass: 'belihebe2020'
       },
       tls: {
         rejectUnauthorized: false
       }
    })


   const info = await  trnasporter.sendMail({
       from: "'Perfildev'  <test@belihebe.com>",
       to: 'perfldev@gmail.com',
       subject: 'Formulario de contacto perfildev',
       html: contentHTML
    })

    console.log('Message sent', info.messageId)

   res.redirect('/')
})

module.exports = router

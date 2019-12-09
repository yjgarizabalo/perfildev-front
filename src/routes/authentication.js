const express = require('express')
const router = express.Router()

const passport = require('passport')

router.get('/signup', (req, res) => {
   res.render('auth/signup.hbs')
})

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup.hbs',
    failureFlash: true
}))

 router.get('/profile', (req, res) => {
     res.send('Este es tu perfil')
 })

module.exports = router
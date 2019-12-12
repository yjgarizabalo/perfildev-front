const express = require('express')
const router = express.Router()

const passport = require('passport')

router.get('/signup', (req, res) => {
    res.render('auth/signup.hbs')
})

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

router.get('/signin', (req, res) => {
    res.render('auth/signin.hbs')
})

router.post('/signin', (req, res) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res);
})

router.get('/profile', (req, res) => {
    res.send('Este es tu perfil')
})

module.exports = router
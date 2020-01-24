const express = require('express')
const router = express.Router()

const pool = require('../database')
const {isLoggedIn} = require('../lib/auth')

router.get('/desarrollador-web', (req, res) => {
    res.render('perfil-dev/desarrollador-web.hbs')
})

module.exports = router
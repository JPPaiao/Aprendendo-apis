const express = require('express')
const app = express()

app.listen('3000')

app.use(express.json())

// app.route('/').get( (req, res) => res.send("Óla"))
// app.route('/:nome').get( (req, res) => res.send( req.params.nome ))

app.route('/').get( (req, res) => res.send(req.query))
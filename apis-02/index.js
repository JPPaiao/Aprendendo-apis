const express = require('express')
const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').post( (req, res) => {
    const { nome, cidade } = req.body
    res.send(nome)
})

// app.route('/').post( (req, res) => res.send(req.body))

// app.route('/:id').get( (req, res) => {
//     res.send(req.params.id)
// })

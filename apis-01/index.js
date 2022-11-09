const express = require('express')
const app = express()

app.listen('3000')

// app.route('/').get( (req, res) => res.send('Hello'))

app.use(express.json())

let author = "JPLP"

app.route('/').get( (req, res) => {
    res.send(author)
})

app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})

app.route('/:id').delete( (req, res) => {
    author = ''
    res.send(req.params)
})

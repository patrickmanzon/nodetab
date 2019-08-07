const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send("hello world")
})

app.post('/register', (req, res) => {
	res.send("hello world " + req.body.email)
})

app.listen(5000)
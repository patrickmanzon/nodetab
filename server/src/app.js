const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const app = express()

app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync().then(() => {
	app.listen(5000)
})


module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send("hello world")
	})

	app.post('/register', (req, res) => {
		res.send("hello world " + req.body.email)
	})
}
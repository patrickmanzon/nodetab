const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {

	app.get('/', (req, res) => {
		res.send("hello world")
	})

	app.post('/register', 
		AuthenticationControllerPolicies.register,
		AuthenticationController.register)

	app.post('/login', 
		AuthenticationController.login)

    app.get('/songs', 
        SongsController.index)
    app.get('/songs/:songId', 
        SongsController.show)
    app.put('/songs/:songId', 
        SongsController.update)
    app.post('/songs', 
        SongsController.createSong)
}
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function JWTsignUser(user)
{	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign(user, config.authentication.key, { expiresIn: ONE_WEEK })
}

module.exports = {
	async register(req, res) {
		try{
			let user = await User.create(req.body)
			const userJson = user.toJSON()
			res.send({
				user: userJson,
				token: JWTsignUser(userJson)
			})
		}catch(err) {
			res.status(400).send({error:'Email already exists.'})
		}
	},

	async login(req, res) {
		try{
			const {email, password} = req.body
			let user = await User.findOne({
				where: {
					email: email
				}
			})

			if(!user){
				console.log(1)
				return res.status(403).send({error: 'Invalid email or password'})
			}

			const isPasswordValid = await user.comparePassword(password)
			if (!isPasswordValid) {
				return res.status(403).send({
				  error: 'The login information was incorrect'
				})
			}
			
			const userJson = user.toJSON()
			res.send({
				user: userJson,
				token: JWTsignUser(userJson)
			})

		}catch(err) {
			console.log(err)
			res.status(500).send({error:'Error when trying to login'})
		}
	}
}
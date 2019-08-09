const Joi = require('joi')

module.exports = {
	register(req, res, next){
		const schema = {
			email: Joi.string().email().required(),
			password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
		}

		const {error, value} = Joi.validate(req.body, schema)

		if(error){
			switch(error.details[0].context.key){
				case 'email':
					res.status(400).send({error:'Email must be email format'}) 
					break

				case 'password':
					res.status(400).send({error:`
						password must consist of letters or numbers and must be atleast 8 to 32 characters long
					`})
					break

				default:
					res.status(400).send({error:'there is something wrong!'})

			}
		}else{
			next()
		}
	}
}
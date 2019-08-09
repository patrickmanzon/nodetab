const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options)
{

	if(!user.changed('password')){
		return
	}
	//console.log(user)
	return bcrypt
		.genSaltAsync(8)
		.then(salt => bcrypt.hashAsync(user.password, salt, null))
		.then(hash => {
			user.setDataValue('password', hash)
		})
}

module.exports = (sequelize, DataTypes) => { 
	const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING(500)
	},
	{
		hooks:{
			beforeUpdate: hashPassword,
			beforeSave: hashPassword
		}
	}
	)

	User.prototype.comparePassword = function (password) {
	    return bcrypt.compareAsync(password, this.password)
	}

	return User
}

module.exports = {
	db: {
		database: 'nodetab',
		username: 'nodetab',
		password: 'nodetab',
		options: {
			host: 'localhost',
			dialect: 'sqlite',
			storage: './nodetab.sqlite'
		}
	},
	authentication: {
		key: "secret"
	}
}
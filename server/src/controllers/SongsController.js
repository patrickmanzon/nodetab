const {Song} = require('../models')
const {Sequelize} = require('../models')
const op = Sequelize.Op

module.exports = {

    async index(req, res) {
        const search = req.query.search
        let songs = null
        try{

            songs = await Song.findAll({})
            if(search){
                songs = await Song.findAll({
                    where: {
                        [op.or] : ['title', 'artist', 'album', 'genre']
                            .map(key => ({
                                [key]: {
                                    [op.like]: `%${search}%`
                                }
                            }))
                    }
                })
            }

            res.send(songs)
        }
        catch(err) {
            console.log(err)
            res.status(500).send({error: "Something went wrong"})
        }
    },

    async show(req, res) {
        console.log(req.params.songId)
        try{
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        }catch(err) {
            console.log(err)
            res.status(500).send({error: "Something went wrong"})
        }
    },

    async createSong(req, res) {
        try{
            const song = await Song.create(req.body)
            res.send({success: 'Song created'})

        }catch(err){
            res.status(400).send({error: err})
        }

    },

    async update(req, res) {
        try{
            const song = await Song.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            res.send(song)
        }catch(err) {
            console.log(err)
            res.status(500).send({error: "Something went wrong"})
        }
    }

}

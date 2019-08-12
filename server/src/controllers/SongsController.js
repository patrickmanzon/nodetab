const {Song} = require('../models')

module.exports = {

    async index(req, res) {
        try{
            const songs = await Song.findAll({})
            res.send(songs)
        }
        catch(err) {
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

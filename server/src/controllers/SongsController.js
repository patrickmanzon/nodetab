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

    async createSong(req, res) {
        try{
            const song = await Song.create(req.body)
            res.send({success: 'Song created'})

        }catch(err){
            res.status(400).send({error: err})
        }

    }

}

const mongoose = require('mongoose')

const { Schema } = mongoose

const gamesModel = new Schema({
    name: { type: String, required: true },
    plataform: { type: String, required: true, },
    price: { type: Number, required: true },
    memoria: { type: String, required: true },
    company: { type: String, required: true }

})

module.exports = mongoose.model('Games',gamesModel)
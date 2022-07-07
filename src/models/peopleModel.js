const mongoose = require('mongoose')

const { Schema } = mongoose

const peopleModel = new Schema({
    firstName: { type: String, required: true, minLenght: 3, maxLenght: 20 },
    lastName: { type: String, required: true, minLenght: 3, maxLenght: 20 },
    userName: { type: String, required: true, minLenght: 3, maxLenght: 20, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    adress: { type: String, required: true },
    phone: { type: Number, required: true, unique: true }

})

module.exports = mongoose.model('People',peopleModel)
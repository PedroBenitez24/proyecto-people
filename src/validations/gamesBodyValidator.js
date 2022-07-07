const Joi = require('joi')

const Schema = Joi.object({
    name: Joi.string().required(),
    plataform: Joi.string().required(),
    price: Joi.number().required(),
    memoria: Joi.string().required(),
    company: Joi.string().required()
})

module.exports = Schema
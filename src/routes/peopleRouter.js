const express = require('express')
const peopleController = require('../controllers/peopleController')

const validator = require('express-joi-validation').createValidator({})
const Schema = require('../validations/peopleBodyValidator')

const router = (People) => {
    const peopleRouter = express.Router()

    const { getAllPeople, getPeopleById, postPeople, putPeopleById } =
        peopleController(People)

    peopleRouter
        .route('/People')
        .get(getAllPeople)
        .post(validator.body(Schema), postPeople)

    peopleRouter
        .route('/People/:id')
        .get(getPeopleById)
        .put(validator.body(Schema), putPeopleById)

    return peopleRouter

}

module.exports = router
const express = require('express')
const gamesController = require('../controllers/gamesController')

const validator = require('express-joi-validation').createValidator({})
const Schema = require('../validations/gamesBodyValidator')

const router = (Games) => {
    const gamesRouter = express.Router()

    const { getAllGames, getGamesById, postGames, putGamesById,} =
        gamesController(Games)

    gamesRouter
        .route('/Games')
        .get(getAllGames)
        .post(validator.body(Schema), postGames)

    gamesRouter
        .route('/Games/:id')
        .get(getGamesById)
        .put(validator.body(Schema), putGamesById)

    return gamesRouter

}

module.exports = router
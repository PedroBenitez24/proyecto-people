
const httpStatus = require('../helpers/httpStatus')

const gamesController = (Games) => {
    const getAllGames = async (req, res, next) => {
        try {
            const { query } = req

            const response = await Games.find(query)

           return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postGames = async (req, res,next) => {
        try {
            const { body } = req
            const games = await new Games(body)

            await Games.save()

           return res.status(httpStatus.CREATED).json(games)
        } catch (err) {
            next(err)
        }
    }

    const putGamesById = async (req, res,next) => {
        try {
            const { body, params } = req
             
            const checkData= await Games.find({
                _id:params.id
            })

            if (checkData === null) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }
             await Games.updateOne({
                _id: params.id
            },
                {
                    $set: {
                        name: body.name,
                        plataform: body.plataform,
                        price: body.price,
                        memoria: body.memoria,
                        company: body.company
                    }
                }
            )
           return res.status(httpStatus.CREATED).send('Data sucessful updated')
        } catch (err) {
            next(err)
        }
    }


    const getGamesById = async (req, res,next) => {
        try {
            const { params } = req

            const response = await Games.findById(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }
    const deleteGamesById = async (req, res,next) => {
        try {
            const { params } = req;
            const response = await Games.findByIdAndDelete(params.id)
            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }
    return { getAllGames, getGamesById, postGames, putGamesById, deleteGamesById }



}

module.exports = gamesController
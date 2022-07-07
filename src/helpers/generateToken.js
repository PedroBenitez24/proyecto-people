const jwt = require('jsonwebtoken')

const generateToken = () => {
const token = jwt.sign({
    data:'USEFUL DATA'
}, 'SECRET', {expiresIn: 'TIME'})

return token
}





module.exports = generateToken
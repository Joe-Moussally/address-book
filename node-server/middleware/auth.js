let secret = process.env.TOKEN_SECRET
let jwt = require('jsonwebtoken')


function authMiddleware() {
    return (req,res,next) => {
        
        const token = req.headers.authorization
        try {
            jwt.verify(token,secret)
            next()
        }catch(err) {
            return res.status(405).send('not authorized')
        }
        
    } 
}

module.exports = authMiddleware;
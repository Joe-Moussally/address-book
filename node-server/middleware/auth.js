let secret = process.env.TOKEN_SECRET
let jwt = require('jsonwebtoken')


function authMiddleware() {
    return (req,res,next) => {
        
        const token = req.headers.authorization
        try {
            let verify = jwt.verify('token',secret)
            next()
        }catch(err) {
            console.log('err')
            return res.status(400).send('not authorized')
        }
        
    } 
}

module.exports = authMiddleware;
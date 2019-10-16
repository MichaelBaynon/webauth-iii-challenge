const jasonwebtoken = require("jsonwebtoken")

const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(token) {
        jasonwebtoken.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: 'nice try you cannot pass'})
            } else {
                req.user = {
                    username: decodedToken.username,
                    department: decodedToken.department
                }
                next()
            }
        })
    } else {
        res.status(400).json({message: 'no token provided'})
    }
}
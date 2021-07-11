let userM = require('../model/user.model')
let URL = require('url')
const { read } = require('fs')
function auth(req, res, next) {
    let parsed = URL.parse(req.url, true)
    if (parsed.query.id !== undefined && parsed.query.cle !== undefined) {
        new userM().getById(parsed.query.id, result => {
            console.log(result)
            if (result.length > 0 && result[0].cle === parsed.query.cle && parseInt(parsed.query.id) === result[0].id) {
                read.idUser = result[0].id
                next()
            }
            else {
                res.status(401).json({ mess: "mauvais token" })
            }
        })
    }
    else {
        res.status(401).json({ mess: "token manquant" })
    }
}

module.exports = auth
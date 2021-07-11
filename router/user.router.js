const express = require('express')
const userM = require("../model/user.model")
const auth = require('../middleware/auth')

let router = express.Router()

router.get('/', auth, (req, res) => {
    new userM().getAll(result => {
        res.status(200).json(result)
    })
})
router.get('/:id', auth, (req, res) => {
    new userM().getById(req.params.id, result => {
        res.status(200).json(result)
    })
})

router.post('/', (req, res) => {
    new userM().add(req.body.login, req.body.mdp)
    res.status(200).json({ mess: "utilisateur ajouté" })

})

router.put('/:id', auth, (req, res) => {
    new userM().update(req.body.login, req.body.mdp, req.params.id)
    res.status(200).json({ mess: "utilisateur modifié" })

})
router.delete('/:id', auth, (req, res) => {
    new userM().delete(req.params.id)
    res.status(200).json({ mess: "utilisateur supprimé" })

})
router.post('/connect', (req, res) => {
    new userM().getByLogin(req.body.login, result => {
        console.log(req.body, result[0])
        if (result[0].MDP == req.body.mdp && req.body.login == result[0].Login) {
            res.status(200).json({ id: result[0].id, cle: result[0].cle })
        }
        else {
            res.status(401).json({ err: "login ou mot de passe erronné" })
        }
    })

})

module.exports = router
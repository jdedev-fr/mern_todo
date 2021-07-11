const express = require('express')
const auth = require('../middleware/auth')
const tacheModel = require('../model/tache.model')

let router = express.Router()

router.get('/', auth, (req, res) => {
    new tacheModel().getByIdUser(req.idUser, result => {
        res.status(200).json(result)
    })
})
router.get('/:id', auth, (req, res) => {
    new tacheModel().getById(req.params.id, result => {
        res.status(200).json(result)
    })
})

router.post('/', (req, res) => {
    new tacheModel().add(req.idUser, req.body.titre, req.body.desc)
    res.status(200).json({ mess: "tache ajouté" })

})

router.put('/:id', auth, (req, res) => {
    new tacheModel().update(req.body.titre, req.body.desc, req.body.statut, req.params.id)
    res.status(200).json({ mess: "tache modifié" })

})
router.delete('/:id', auth, (req, res) => {
    new tacheModel().delete(req.params.id)
    res.status(200).json({ mess: "tache supprimé" })

})

module.exports = router
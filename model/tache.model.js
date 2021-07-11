const bdd = require('../connectBDD')

class tacheModel {
    getAll(cb) {
        bdd.query('SELECT * FROM tache', (err, res) => {
            if (err) console.error(err)
            else {
                cb(res)
            }
        })
    }
    getById(id, cb) {
        bdd.query('SELECT * FROM tache where id=?', [id], (err, res) => {
            if (err) console.error(err)
            else {
                cb(res)
            }
        })
    }
    getByIdUser(idUser, cb) {
        bdd.query('SELECT * FROM tache where id_1=?', [idUser], (err, res) => {
            if (err) console.error(err)
            else {
                cb(res)
            }
        })
    }
    add(idUser, titre, descritpion) {
        bdd.query('INSERT INTO tache (titre,description,id_1,statut) VALUES(?,?,?,0)', [titre, descritpion, idUser], (err, res) => {
            if (err) console.error(err)

        })
    }
    update(titre, description, statut, id) {
        bdd.query('UPDATE tache set titre=?, description=?,statut=? WHERE id=?', [titre, description, statut, id], (err, res) => {
            if (err) console.error(err)

        })
    }
    delete(id) {
        bdd.query('DELETE FROM tache WHERE id=?', [id], (err, res) => {
            if (err) console.error(err)

        })
    }
}

module.exports = tacheModel
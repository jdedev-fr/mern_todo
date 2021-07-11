const bdd = require('../connectBDD')
const { v4: uuidv4 } = require('uuid');

class userModel {
    getAll(cb) {
        bdd.query('SELECT * FROM utilisateur', (err, res) => {
            if (err) console.error(err)
            else {
                cb(res)
            }
        })
    }
    getById(id, cb) {
        bdd.query('SELECT * FROM utilisateur where id=?', [id], (err, res) => {
            if (err) console.error(err)
            else {
                cb(res)
            }
        })
    }
    getByLogin(login, cb) {
        bdd.query('SELECT * FROM utilisateur where Login=?', [login], (err, res) => {
            if (err) console.error(err)
            else {
                cb(res)
            }
        })
    }
    add(login, mdp) {
        bdd.query('INSERT INTO utilisateur (Login,MDP,cle) VALUES(?,?,?)', [login, mdp, uuidv4()], (err, res) => {
            if (err) console.error(err)

        })
    }
    update(login, mdp, id) {
        bdd.query('UPDATE utilisateur set Login=?, MDP=?,cle=? WHERE id=?', [login, mdp, uuidv4(), id], (err, res) => {
            if (err) console.error(err)

        })
    }
    delete(id) {
        bdd.query('DELETE FROM utilisateur WHERE id=?', [id], (err, res) => {
            if (err) console.error(err)

        })
    }
}

module.exports = userModel
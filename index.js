const express = require('express')
const bdd = require('./connectBDD')
let app = new express()

const userR = require('./router/user.router')
const tacheR = require('./router/tache.router')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', userR)
app.use('/api/tache', tacheR)

app.get("/", (req, res) => {
    res.send("<h1>Welcome home JDE</h1>")
})

app.listen(3000)
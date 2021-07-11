const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo'
});

connection.connect(err => {
    if (err) console.error(err)
    else console.log("Mysql connecté")
});

module.exports = connection
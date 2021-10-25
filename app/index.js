const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlCreate = `CREATE TABLE IF NOT EXISTS people (name VARCHAR(255) NOT NULL)`
connection.query(sqlCreate)

const sqlInsert = `INSERT INTO people(name) values('Alcino')`
connection.query(sqlInsert)

connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
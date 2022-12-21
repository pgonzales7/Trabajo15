/*
const http = require('http');

const hostname = '127.0.0.2';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200
res.setHeader('Content-Type', 'text/plain')
let nombre = "Pedro Gonzales Castro"
res.end(`Hola mi nombre es: ${nombre}`)
})

server.listen(port, hostname, () => {
console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
})
*/

const express = require ('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    let suma = Number(5+5);
    res.send(`La suma es: ${suma}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

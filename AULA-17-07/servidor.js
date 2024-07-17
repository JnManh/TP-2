const { log } = require('console')
const express = require('express')
const app = express()
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/c', (req, res) => {
    res.render('calculadora', {result: ''})
})

app.get('/soma', (req, res) => {
    let num1 = parseFloat(req.query.n1)
    let num2 = parseFloat(req.query.n2)
    let conta = num1 + num2
    let result = `${num1} + ${num2} = ${conta}`
    console.log(result);
    res.render('resultado', {result})
})

app.get('/sub', (req, res) => {
    let num1 = parseFloat(req.query.n1)
    let num2 = parseFloat(req.query.n2)
    let conta = num1 - num2
    let result = `${num1} - ${num2} = ${conta}`
    console.log(result);
    res.render('resultado', {result})
})

app.get('/mult', (req, res) => {
    let num1 = parseFloat(req.query.n1)
    let num2 = parseFloat(req.query.n2)
    let conta = num1 * num2
    let result = `${num1} * ${num2} = ${conta}`
    console.log(result);
    res.render('resultado', {result})
})

app.get('/div', (req, res) => {
    let num1 = parseFloat(req.query.n1)
    let num2 = parseFloat(req.query.n2)
    let conta = num1 / num2
    let result = `${num1} / ${num2} = ${conta}`
    console.log(result);
    res.render('resultado', {result})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
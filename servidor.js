const { log } = require('console')
const express = require('express')
const app = express()
const PORT = 8080
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/index', (req, res) => {
    res.render('index')
})

app.post('/resultado', (req, res) => {
    let massa = parseFloat(req.body.massa)
    let massaM = parseFloat(req.body.massaM)
    let conta = massa / massaM
    let result = `N = ${massa} / ${massaM} = ${conta}`
    console.log(result);
    res.render('resultado', {result})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
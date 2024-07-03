const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    let num = 50 - 10 * 5
    response.send(`Cesar, lembro de ${num} da sua matéria :((`)
})

app.listen(8080)
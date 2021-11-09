const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pessoa', (req, res) => {
  res.send('Rota atividade com GET e recurso pessoa valores de pessoa devem ser retornados')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
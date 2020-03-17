const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

//iniciando o app
const app = express()
app.use(express.json()) //permitir que api receba dados em JSON!
app.use(cors()) //permite acesso externo da api a partir de qqr dominio!


//iniciando o DB (nao esqueça de definir o nome)
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

requireDir('./src/models')


//recebe todo tipo de requisição (app.use)
app.use('/api', require('./src/routes'))

app.listen(3001, function(){
  console.log("running...")
})
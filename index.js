const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const smartphone = require('./routes/smartphone.route')

const uri = 'mongodb+srv://smartphone:19650917@cluster0-zfkos.gcp.mongodb.net/smartphones?retryWrites=true&w=majority'
const mongoDB = process.env.MONGO_DB_URI || uri

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise


const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB'))

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', smartphone)
app.use('/smartphone', smartphone)

app.listen(80, () => {
    console.log('Aplicação em execução.')
})
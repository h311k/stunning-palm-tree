const Smartphone = require('../models/smartphone.model')

exports.teste = (req,res) => {
    res.send('Olá, Controller funcionando.')
}

exports.create = (req,res) => {
    let smartphone = new Smartphone({
        nome: req.body.nome,
        marca: req.body.marca
    })
    smartphone.save((err) => {
        if(err){
            return next(err)
        }
        res.send('Registo de Smartphone criado com sucesso')
    })
}

exports.details = (req,res) => {

    Smartphone.findById(req.params.id, (err,product) => {
        if(err) return next(err)
        res.send(product)
    })
}
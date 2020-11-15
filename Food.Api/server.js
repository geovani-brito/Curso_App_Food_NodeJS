const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

let pessoas = [];

app.get('/', (req, res) => {
    res.status(200).send(pessoas)
})

app.post('/', (req, res) => {
    console.log('Corpo:', req.body);
    pessoas.push(req.body);
    res.status(201).send(req.body);
})

app.put('/:id', (req, res) => {
    let pessoaEncotrada = pessoas.filter(pes => { 
        return pes.id == req.params.id});
    pessoaEncotrada = req.body;
    res.status(202).send(pessoaEncotrada);
})

app.delete('/:id', (req, res) => {
    for (let index = 0; index < pessoas.length; index++) {
        const pessoa = pessoas[index]
        if (pessoa.id == req.params.id) {
            pessoas.splice(index, 1)
        }
    }
    res.status(204).send();
});

app.listen(3000, () => {
    console.log("Servidor funcionando!")
})
'use strict'

class produtoController {

}

produtoController.prototype.post = async (req, res) => {}
produtoController.prototype.put = async (req, res) => {}
produtoController.prototype.get = async (req, res) => {
    res.status(200).send('Mostrando produtos')
}
produtoController.prototype.getById = async (req, res) => {
    res.status(200).send(`Mostrando produto número: ${req.params.id}`);
}
produtoController.prototype.delete = async (req, res) => {}

module.exports = produtoController
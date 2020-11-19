'use strict'

class categoriaController {

}

categoriaController.prototype.post = async (req, res) => {}
categoriaController.prototype.put = async (req, res) => {}
categoriaController.prototype.get = async (req, res) => {
    res.status(200).send('Listando as categorias');
}
categoriaController.prototype.getById = async (req, res) => {
    res.status(200).send(`Mostrando categoria ${req.params.id}`)
}
categoriaController.prototype.delete = async (req, res) => {}

module.exports = categoriaController
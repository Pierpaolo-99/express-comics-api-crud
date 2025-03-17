const comics = require('../data/comicsData')

function index (req,res) {
    res.send('return all comics')
}

function show (req,res) {
    const comicsId = req.params.id
    res.send(`show the comic with id ${comicsId}`)
}

function create (req,res) {
    res.send('create a new comic')
}

function update (req,res) {
    const comicsId = req.params.id
    res.send(`update the comic with id ${comicsId}`)
}

function modify (req,res) {
    const comicsId = req.params.id
    res.send(`modify the comic with id ${comicsId}`)
}

function destroy (req,res) {
    const comicsId = req.params.id
    res.send(`delete the comic with id ${comicsId}`)
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}
const comics = require('../data/comicsData')

function index (req,res) {

    let filteredcomic = comics

    if (req.query.publisher) {
        filteredcomic = comics.filter(comic => comic.publisher.includes (req.query.publisher));
    }

    res.json(filteredcomic)

    //res.send('return all comics')
}

function show (req,res) {

    const comicsId = Number(req.params.id)

    const comic = comics.find(comic => comic.id === comicsId)

    if (!comic){

        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    res.json(comic)
    //res.send(`show the comic with id ${comicsId}`)
}

function create (req,res) {

    const newId = comics[comics.length - 1].id + 1

    const newComic = {
        id: newId,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        year: Number(req.body.year)
    }

    comics.push(newComic)

    console.log(req.body);
    console.log(comics);
    
    res.status(201);
    res.json(newComic)
    //res.send('create a new comic')
}

function update (req,res) {
    const comicsId = Number(req.params.id)

    const comic = comics.find(comic => comic.id === comicsId)

    if (!comic){
        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    comic.title = req.body.title
    comic.author = req.body.author
    comic.publisher = req.body.publisher
    comic.year = Number(req.body.year)

    console.log(comics);
    
    res.json(comic)
    //res.send(`update the comic with id ${comicsId}`)
}

function modify (req,res) {
    const comicsId = Number(req.params.id)

    const comic = comics.find(comic => comic.id === comicsId)

    if (!comic){
        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    if (req.body.title){
        comic.title = req.body.title
    }
    if (req.body.author){
        comic.author = req.body.author
    }
    if (req.body.publisher){
        comic.publisher = req.body.publisher
    }
    if (req.body.year){
        comic.year = Number(req.body.year)
    }

    console.log(comics);
    
    res.json(comic)

    //res.send(`modify the comic with id ${comicsId}`)
}

function destroy (req,res) {

    const comicsId = Number(req.params.id)

    const comic = comics.find(comic => comic.id === comicsId)

    if (!comic){
        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    comics.splice(comics.indexOf(comic), 1)

    console.log(comics);

    res.sendStatus(204)
    //res.send(`delete the comic with id ${comicsId}`)
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}
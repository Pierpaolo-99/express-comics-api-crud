const videos = require('../data/videosData');

function index (req,res) {

    let filteredvideo = videos

    if (req.query.title) {
        filteredvideo = videos.filter(video => video.title.includes (req.query.title));
    }

    res.json(filteredvideo)
}

function show (req,res) {

    const videoId = Number(req.params.id)

    const video = videos.find(video => video.id === videoId)

    if (!video){

        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    res.json(video)
}

function create (req,res) {

    const newId = videos[videos.length - 1].id + 1

    const newVideo = {
        id: newId,
        title: req.body.title,
        director: req.body.director,
        producer: req.body.producer,
        year: Number(req.body.year)
    }

    videos.push(newVideo)

    console.log(req.body);
    console.log(videos);
    
    res.status(201);
    res.json(newVideo)
}

function update (req,res) {
    const videoId = Number(req.params.id)

    const video = videos.find(video => video.id === videoId)

    if (!video){
        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    video.title = req.body.title
    video.director = req.body.director
    video.producer = req.body.producer
    video.year = Number(req.body.year)

    console.log(videos);
    
    res.json(video)
}

function modify (req,res) {
    const videoId = Number(req.params.id)

    const video = videos.find(video => video.id === videoId)

    if (!video){
        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    if (req.body.title){
        video.title = req.body.title
    }
    if (req.body.director){
        video.director = req.body.director
    }
    if (req.body.producer){
        video.producer = req.body.producer
    }
    if (req.body.year){
        comic.year = Number(req.body.year)
    }

    console.log(videos);
    
    res.json(video)

}

function destroy (req,res) {

    const videoId = Number(req.params.id)

    const video = videos.find(video => video.id === videoId)

    if (!video){
        return res.status(404).json({
            error: "404 Not Found",
            message: "Comic Not Found"
        })
    }

    videos.splice(videos.indexOf(video), 1)

    console.log(videos);

    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}
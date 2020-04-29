const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'))

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/40874927?s=460&v=4",
        name: "André Euzébio",
        role: "Desenvolvedor de Sistemas",
        description: 'Formado em Sistemas de Informações. Colaborador da <a href="https://senior.com.br" target="_blank">Senior Sistemas</a>',
        links: [
            { name: "Github" , url: "https://github.com/andre-euz"},
            { name: "Instagram" , url: "https://www.instagram.com/andre_rdg/?hl=pt-br"},
            { name: "Linkedin" , url: "https://www.linkedin.com/in/andreeuzebio/"}
        ]

    }
    return res.render("about", {about});
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos });
})

server.get("/video", function(req, res) {
    const id = req.query.id;

    const video = videos.find(function(video){
        return video.id == id;        
    })

    if (!video) {
        return res.send("Video not found!");
    }
    return res.render("video", { item: video })

})

server.listen(5000, function() {
    console.log("server is running");
})
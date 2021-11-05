//definicão de váriavel para inicialização do servidor express
const express = require("express")
//chamada da função dentro de uma constante
const server = express()
const db = require("./db")
// Obejeto com as ideias
// const ideias = [
//     {

//     },
//     {
//         img: "https://www.flaticon.com/premium-icon/icons/svg/2887/2887731.svg",
//         title: "Curso de Programação",
//         category: "Estudo",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae null voluptates maiores veniam cum molestias, expedita adipisci vero beatae, quasi itaque animi obcaecati, rerum distinctio delectus fugiat non ipsa corporis.",
//         url: "http://rocketseat.com.br" 
//     },
//     {
//         img: "https://www.flaticon.com/premium-icon/icons/svg/2887/2887731.svg",
//         title: "Curso de Programação",
//         category: "Estudo",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae null voluptates maiores veniam cum molestias, expedita adipisci vero beatae, quasi itaque animi obcaecati, rerum distinctio delectus fugiat non ipsa corporis.",
//         url: "http://rocketseat.com.br" 
//     },
//     {
//         img: "https://www.flaticon.com/premium-icon/icons/svg/2887/2887731.svg",
//         title: "Curso de Programação",
//         category: "Estudo",
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae null voluptates maiores veniam cum molestias, expedita adipisci vero beatae, quasi itaque animi obcaecati, rerum distinctio delectus fugiat non ipsa corporis.",
//         url: "http://rocketseat.com.br" 
//     }
// ]
//configurar arquivos estátiocos
server.use(express.static("public"))
//habilitar uso do req body
server.use(express.urlencoded({ extended: true }))
//configuração do nunjucks
const nunjucks = require("nunjucks")
//configurando o nunjucks
nunjucks.configure("views", {
    //conexão do nunjucks com o express através da váravel server
    express: server,
    //Não faça o chache
    //"Guarda algumas coisas em memórias para utilizar mais tarde"
    noCache: true
})
//rota da página index html
server.get("/", function (req, res) {
    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) return console.log(err)
        const reverseIdeias = [...rows].reverse()
        let lastIdeias = []
        for (let ideia of reverseIdeias) {
            if (lastIdeias.length < 2) {
                lastIdeias.push(ideia)
            }
        }
        return res.render("index.html", { ideias: lastIdeias })
    })
})
//rota da págia ideias
server.get("/ideias", function (req, res) {
    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) return console.log(err)
        const reverseIdeias = [...rows].reverse()
        return res.render("ideias.html", { ideias: reverseIdeias })
    })

})
server.post("/", function (req, res) {
    const query = (`INSERT INTO ideias(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);`)
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.descripition,
        req.body.link
    ]
    db.run(query, values, function (err) {
        if (err) return console.log(err)
        return res.redirect("/")
    })
})
//porta em que rodará o servidor web
server.listen(3000)

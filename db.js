const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./houseCriative.db")
// db.serialize(function (){
//     db.run(`CREATE TABLE IF NOT EXISTS ideias(
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image  TEXT,
//         title TEXT,
//         category TEXT,
//         description TEXT,
//         link TEXT
//     );`)  
//     const query = (`INSERT INTO ideias(
//         image,
//         title,
//         category,
//         description,
//         link
//     ) VALUES (?,?,?,?,?);`) 
//     const values = [
//         "https://image.flaticon.com/icons/svg/502/502664.svg",
//         "Skate",
//         "Sport",
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae null voluptates maiores veniam cum molestias, expedita adipisci vero beatae, quasi itaque animi obcaecati, rerum distinctio delectus fugiat non ipsa corporis.",
//         "http://rocketseat.com.br" 
//     ] 
//         // db.run(query, values, function(err){
//         //     if (err) return console.log(err)
//         //     console.log(this)
//         // })
    // db.run(`DELETE FROM ideias WHERE id = ?`, [14], function(err){
    //     if(err) return console.log(err)
    //     console.log("Deletei", this)
    // })
    // db.run(`DELETE FROM ideias WHERE id = ?`, [12], function(err){
    //     if(err) return console.log(err)
    //     console.log("Deletei", this)
    // })
    // db.run(`DELETE FROM ideias WHERE id = ?`, [13], function(err){
    //     if(err) return console.log(err)
    //     console.log("Deletei", this)
    // })

//     db.all(`SELECT * FROM ideias`, function(err, rows){
//         if(err) return console.log(err)
//         console.log(rows)], function(err){
//     if(err) return console.log(err)
//     console.log("Deletei", this)
// })
// if(err) return console.log(err)
// console.log("Deletei", this)
// })
// db.run(`DELETE FROM ideias WHERE id = ?`, [15], function(err){
//     if(err) return console.log(err)
//     console.log("Deletei", this)
// })
    // db.run(`DELETE FROM ideias WHERE id = ?`, [13], function(err){
    //     if(err) return console.log(err)
    //     console.log("Deletei", this)
    // })

//     db.all(`SELECT * FROM ideias`, function(err, rows){
//         if(err) return console.log(err)
//         console.log(rows)
//     })
//     })



// })
// module.exports = db

//     db.all(`SELECT * FROM ideias`, function(err, rows){
//         if(err) return console.log(err)
//         console.log(rows)
//     })



// })
module.exports = db
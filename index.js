const express = require('express');
const app = express();
let _films = require("./top250.json");
var bodyParser = require('body-parser');
const fs = require('fs');
app.use( bodyParser.json() ); 


app.get('/', (req, res) => {
  res.send("Hello World!!!");
});

app.get('/readAll', (req, res) => {

let newFilms = [];

   for (let i = 0; i < _films.length; i++) {
        newFilms.push(Object.assign({}, _films[i]));
    }

  newFilms.sort((a, b) => {

                    if (a.position > b.position) return 1;
                    if (a.position === b.position) return 0;
                    if (a.position < b.position) return-1;          
        });

res.send(newFilms);

});

app.post('/read',(req, res) => {
  let id = req.body.id;
 res.send(_films[id-1]);
});

app.post('/create', (req, res) => {
    let id = Date.now().toString();
    let title = req.body.title;
    let rating = req.body.rating;
    let year = req.body.year;
    let budget = req.body.budget;
    let gross = req.body.gross;
    let poster = req.body.poster;
    let position = req.body.position;

req.body.id = Date.now().toString();

_films.push(req.body);
fs.writeFile("top250.json", JSON.stringify(_films), "utf8", function () { });
        res.send(req.body);

});

app.post('/update', (req, res) => {

});

app.post('/delete', (req, res) => {
  
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
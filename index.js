const express = require('express');
const app = express();
let _films = require("./top250.json");

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

app.get('/read', (req, res) => {
  res.json(_films);
});

app.get('/create', (req, res) => {
  res.json(_films);
});

app.get('/update', (req, res) => {
  res.json(_films);
});

app.get('/delete', (req, res) => {
  res.json(_films);
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
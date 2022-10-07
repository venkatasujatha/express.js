const express = require('express');
const app = express();
const {people} = require('./4-data');

app.get('/', (req, res) => {
    res.json([{ name:"sujatha"},{ name:"deepika"}])
})

//dynamically
app.get('/dyn',(req, res) => {
    res.json(people)
})

app.listen(5000)
const express = require('express');
const path = require('path');
const app = express();

//app.get
app.get('/',(req, res) => {
    res.status(200).send("home page");
})
//app.get
app.get('/about',(req, res) => {
    res.status(200).send("about page");
})
//app.all
app.all('*',(req, res) => {
    res.status(404).send("pages not found");
})
//setup static and middleware
app.use(express.static('./public'))
//app.use
app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname,'./app.js'));
})
//json
app.get('/api/jso',(req, res) => {
    res.json([{name:'sujatha'},{name:"sasi"}])
})
//app.listen
app.listen(5000,(req, res) => {
    console.log('listening on port :5000')
})
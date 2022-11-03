const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./modules/database');
 
const recetasRouter = require('./routes/recetas-router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/recetas', recetasRouter);

app.get('/', function(req, res){
    console.log(req.body);
    res.send("Peticion recibida" );
})

app.listen(3000, function(){
    console.log('Se levantó el servidor')
})
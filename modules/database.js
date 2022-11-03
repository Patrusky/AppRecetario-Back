var mongoose  = require('mongoose');
//Nombre bd
let bd = 'apprecetas';
let port = '27017';
let host = 'localhost';

class Database {

    
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then(result =>console.log('Se conectó a MongoDB'))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();
const { default: mongoose } = require('mongoose');
const monogoose = require('mongoose');

const esquema = new mongoose.Schema({
    name: String,
    description: String,
    elaboration: [String],
    ingredients: [String],
    time: String,
    rations: Number,
    image: String
},{ collection: 'recetas'})

module.exports = mongoose.model('recipes', esquema);
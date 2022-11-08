const express = require('express');
const router = express.Router();
const recipe = require('../models/receta');

// CREAR Receta

router.post('/', function (req, res) {
    let r = new recipe(
        {
            title: req.body.name,
            description: req.body.description,
            elaboration: req.body.elaboration,
            ingredients: req.body.ingredients,
            time: req.body.time,
            rations: req.body.rations,
            image: req.body.image
        }
    )
    r.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

// OBTENER todas las recetas

router.get('/', function (req, res) {
    recipe.find({}).then(result => {
        console.log('recetas-->', recipe);
        console.log(result)
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

// OBTENER 1 receta

router.get('/:id', function (req, res) {
    recipe.find({ _id: req.params.id })
        .then(result => {
            console.log('receta-->', recipe);
            res.send(result);
            res.end();
        }).catch(error => {
            res.send(error);
            res.end();
        });
});

// EDITAR receta

router.put('/:id', function (req, res){
    recipe.updateOne(
        {
            _id: req.params.id
        },
        {
            title: req.body.name,
            description: req.body.description,
            elaboration: req.body.elaboration,
            ingredients: req.body.ingredients,
            time: req.body.time,
            rations: req.body.rations,
            image: req.body.image
        }
    ).then(result => {
        console.log('receta-->', recipe);
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});


// ELIMINAR receta
router.delete('/:id', function(req, res){
    recipe.remove({ _id: req.params.id })
    .then(result => {
        console.log('receta-->', recipe);
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
})

module.exports = router;
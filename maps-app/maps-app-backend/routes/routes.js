const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const addMapElementCopy = require('../models/AddMapElementModel')


router.get('/hola' , (request, response) => {
    let a = {hola: "hola"};
    response.json(a)
});

router.get('/dropTable', (request, response) => {
    console.log("entrando aqui")
    mongoose.connection.db.dropCollection('mapelements', function(err, result) {
        response.json(result);
    });
});

router.post('/addMapElement', (request, response) => {

    const mapElement = new addMapElementCopy({
        id: request.query.id,
        name: request.query.name,
        url: request.query.url,
        type: request.query.type,
        adminName: request.query.adminName,
        area: request.query.area,
        description: request.query.description,
        adminPick: request.query.adminPick,
        date: request.query.date,
        lat: request.query.lat,
        lng: request.query.lng
    })

    mapElement.save()
    .then(data => {
        response.json({code: "200", status: `Se ha añadido correctamente a ${mapElement.name} con un id de ${mapElement.id}  `});
    })
    .catch(error => {
        console.log("el error es");
        console.log(error);
        response.json({code: "0", status: error.toString()});
    })
});

module.exports = router;
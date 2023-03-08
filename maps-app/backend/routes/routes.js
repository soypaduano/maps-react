const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const addMapElementCopy = require('../models/AddMapElementModel');
const ResponseModel = require('../models/ResponseModel');

const RESPONSE_CODES = {
    OK: '200',
    ERROR: '0'
}

router.get('/dropTable', (request, response) => {
    mongoose.connection.db.dropCollection('mapelements', function(err, result) {
        if(error) response.json(new ResponseModel(RESPONSE_CODES.ERROR, error.toString));
        response.json(new ResponseModel(RESPONSE_CODES.OK, result))
    });
});

router.get('/deleteElement', (request, response) => {
    let id = request.query.id;
    addMapElementCopy.find({id: id}).deleteOne(function (error, user) {
        if(error) response.json(new ResponseModel(RESPONSE_CODES.ERROR, error.toString));
        response.json(new ResponseModel(RESPONSE_CODES.OK, `Se ha eliminado correctamente a ${id}`))
    });
});

router.get('/getAllElements', (request, response) => {
    addMapElementCopy.find({}).then(function (users) {
        response.send(users); //TODO: Ver porque se hace con response.send y no con json.
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
        response.json(new ResponseModel(RESPONSE_CODES.OK, `Se ha añadido correctamente a ${mapElement.name} con un id de ${mapElement.id}`))
    })
    .catch(error => {
        response.json(new ResponseModel(RESPONSE_CODES.ERROR, error.toString()))
    })
});

module.exports = router;
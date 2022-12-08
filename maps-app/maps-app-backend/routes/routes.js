const express = require('express');
const router = express.Router();
const addMapElementCopy = require('../models/AddMapElementModel')

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
        lon: request.query.lon
    })

    mapElement.save()
    .then(data => {
        response.json();
    })
    .catch(error => {
        console.log(error);
        response.json(error);
    })

});

module.exports = router;
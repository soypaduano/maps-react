const mongoose = require('mongoose');

const addMapElementTemplate = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    adminName: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    adminPick: {
        type: Boolean,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    lat: {
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('mapElements', addMapElementTemplate)



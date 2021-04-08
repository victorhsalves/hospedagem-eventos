const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    hour: String,
    organization: String,
    delegate: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
})

module.exports = mongoose.model('Event', EventSchema);
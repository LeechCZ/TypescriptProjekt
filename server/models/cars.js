const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    horsepower: {type: Number, required: true}
});

module.exports = mongoose.model("Car", carSchema);

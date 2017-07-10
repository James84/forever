var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    Title: String,
    ThumbnailUrl: String,
    MainImageUrl: String,
    Price: String,
    Reference: String,
    ProductLink: String,
    Description: String
}/*, {
    collection: 'DarceyWaxMelt'
}*/);
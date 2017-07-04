var mongoose = require('mongoose');
var mapper = require('../mappers/productMapper')

var db = mongoose.createConnection('mongodb://localhost:27017/DarceyDB', function (err) {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('database connected');
    }
});

var darceySchema = require('./models/darcey');

var exports = module.exports.Products = function (req, res) {
    var darcey = db.model('Darcey', darceySchema);

    var query = darcey.find({});

    query.exec(function (err, products) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render('darceys/index', {
                products: mapper.darceyMapper(products)
            });
        }
    });
}
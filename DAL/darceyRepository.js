let mongoose = require('mongoose'),
    mapper = require('../mappers/productMapper'),
    darceySchema = require('./models/darcey');

const DBCONNECTION = 'mongodb://jrunham:220815Dy@ds149122.mlab.com:49122/leonida-boutique';

var db = mongoose.createConnection(DBCONNECTION, function (err) {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('database connected');
    }
});

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

module.exports.GetProductById = function(req, res, id){
    var darcey = db.model('Darcey', darceySchema);
    
    var query = darcey.findById(id);
    
    
    query.exec(function (err, product) {
        if (err) {
            console.log(`Error: ${err}`);
            res.status(500).send(`Error: ${error}`);
        } else {
            if(product === null){
                console.log('No product found');
                res.status(404).send('not found');
            }
            else{
                console.log(`Product: ${product}`)
                res.render('darceys/view', {
                    product: product
                });
            }
        }
    });
}
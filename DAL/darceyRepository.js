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
    var collectionParam = req.params.product;
    var mongoCollection = getCollectionName(collectionParam.trim());
//    
//    console.log(getCollectionName('wax-melts'));
//    
//    console.log('Collection param', collectionParam);
//    console.log('Mongo param', mongoCollection);
    
    if(!collectionParam || !mongoCollection){
        res.status(404).send('product not found');
    } else {
        var model = mongoose.model(mongoCollection, darceySchema, mongoCollection);

        var query = model.find({});

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

getCollectionName = function(param){
    switch(param){
        case 'wax-melts':
            return 'DarceyWaxMelts';
        case 'candles':
            return 'DarceyCandles';  
        case 'oil-burners':
            return 'DarceyOilBurners';  
        case 'perfume':
            return 'DarceyPerfume';  
        default:
            return null;
    }
}
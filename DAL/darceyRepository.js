var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DarceyDB', function (err) {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('database connected');
    }
});

var db = mongoose.connection;;

var darceySchema = mongoose.Schema({
    Title: String,
    ThumbnailUrl: String,
    MainImageUrl: String,
    Price: String,
    Reference: String,
    ProductLink: String,
    Description: String
}, {
    collection: 'DarceyProduct'
});

var exports = module.exports.Products = function (req, res) {
    var darcey = mongoose.model('Darcey', darceySchema);

    var query = darcey.find({});

    query.exec(function (err, products) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            res.render('darceys/index', {
                products: products
            });
        }
    });
}
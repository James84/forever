//let keystone = require('keystone'),
//    DarceyProducts = keystone.list('darceys'),
//    DarceyMongo = require('../../DAL/darceyRepository');
//
//exports = module.exports = function(req, res) {
//    DarceyProducts
//        .model
//        .find()
//        .exec(function(err, products){
//            if(err){
//                throw err;
//            }
//
//            var view = new keystone.View(req, res);
//        
//            view.render('darceys/index', {
//                products: products
//            });
//        })
//} 
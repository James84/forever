//// controller for gallery page
//var keystone = require('keystone');
//var Crafts = keystone.list('Crafts');   
//
//exports = module.exports = function(req, res) {
//
//    Crafts
//    .model
//    .find()
//    .limit(100)
//    .exec(function(err, crafts){
//        if(err){
//            throw err;
//        }
//        
//        var view = new keystone.View(req, res);
//    
//        view.render('crafts/index', {
//            crafts: crafts
//        });   
//    });
//}
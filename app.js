const PORT = 3000;

//var express = require('express');
var keystone = require('keystone');
var expressHandleBars = require('express3-handlebars');
var path = require('path');

//var app = express();
//
//app.use(express.static(path.join(__dirname, 'public')));
//
//// set up templating
//app.engine('handlebars', handlebars({
//    layoutsDir: path.join(__dirname, 'views/layouts'),
//    partialsDir: path.join(__dirname, '/views/partials/'),
//    defaultLayout: 'main',
//    helpers: {
//            section: function (name, options) {
//                if (!this._sections) {
//                    this._sections = {};
//                }
//                this._sections[name] = options.fn(this);
//                return null;
//            }
//        }
//}));

keystone.init({
    'name': 'LeonidaBoutique',
    
    'scss': 'public',
    'static': 'public',
//    'favicon': 'public/favicon.ico',
    'views': 'views',
    
    'custom engine': expressHandleBars({
                        layoutsDir: path.join(__dirname, 'views/layouts'),
                        partialsDir: path.join(__dirname, '/views/partials/'),
                        defaultLayout: 'main',
//                        extname: '.hbs',
                        helpers: {
                         // set up sections
                          section: function(name, options){
                            if(!this._sections){
                              this._sections = {};
                            }
                            this._sections[name] = options.fn(this);
                            return null;
                          }
                        }
                    }),
    
    'view engine': 'handlebars',
    
    'auto update': true,
    'mongo': 'mongodb://localhost/leonida-boutique',
  
    'session': true,
    'auth': true,
    'user model': 'User', 
    'cookie secret': '93eb055c82b64ad98177a5def4929593'
});

require('./models'); 
 
keystone.set('routes', require('./routes'));
 
keystone.start();

//app.set('view engine', 'handlebars');
//
//app.get('/', function(req, res){
//    res.render('home');
//});
//
//app.get('/crafts', function(req, res){
//    res.render('crafts/index', {
//        title: "Leonida Crafts"
//    });
//});
//
//app.get('/darcies', function(req, res){
//    res.render('darcies/index', {
//        title: "Darcies"
//    });
//});
//
//app.get('/enchanted', function(req, res){
//    res.render('enchantedteardrops/index', {
//        title: "Enchanted Teardrops"
//    });
//});
//
//app.get('/forever', function(req, res){
//    res.render('forever/index', {
//        title: "Forever"
//    });
//});
//
//app.listen(PORT, function(){
//   console.log(`App running on port ${PORT}`) 
//});
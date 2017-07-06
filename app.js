const PORT = 3000;
const 

let keystone = require('keystone'),
    expressHandleBars = require('express3-handlebars'),
    path = require('path');

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
//    'mongo': 'mongodb://localhost:27017/leonida-boutique',
    'mongo': 'mongodb://jrunham:220815Dy@ds149122.mlab.com:49122/leonida-boutique',

    'session': true,
    'auth': true,
    'user model': 'User', 
    'cookie secret': '93eb055c82b64ad98177a5def4929593'
});

require('./keystoneModels'); 
 
keystone.set('routes', require('./routes'));
 
keystone.start();
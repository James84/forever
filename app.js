const PORT = 3000;

var express = require('express');
var handlebars = require('express3-handlebars');
var path = require('path');

var app = express();

app.use(express.static('public'))

// set up templating
app.engine('handlebars', handlebars({
                        layoutsDir: path.join(__dirname, 'views/layouts'),
                        partialsDir: path.join(__dirname, '/views/partials/'),
                        defaultLayout: 'main',
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
                    }));

app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/darceys', function(req, res){
    let darceys = require('./DAL/darceyRepository');
    
    darceys.Products(req, res);
});

app.listen(PORT, function(){
   console.log(`App running on port ${PORT}`) 
});
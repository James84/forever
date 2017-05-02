const PORT = 3000;

var express = require('express');
var handlebars = require('express3-handlebars');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// set up templating
app.engine('handlebars', handlebars({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, '/views/partials/'),
    defaultLayout: 'main',
    helpers: {
            section: function (name, options) {
                if (!this._sections) {
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

app.get('/crafts', function(req, res){
    res.render('crafts/index', {
        title: "Leonida Crafts"
    });
});

app.get('/darcies', function(req, res){
    res.render('darcies/index', {
        title: "Darcies"
    });
});

app.get('/enchanted', function(req, res){
    res.render('enchantedteardrops/index', {
        title: "Enchanted Teardrops"
    });
});

app.get('/forever', function(req, res){
    res.render('forever/index', {
        title: "Forever"
    });
});

app.listen(PORT, function(){
   console.log(`App running on port ${PORT}`) 
});
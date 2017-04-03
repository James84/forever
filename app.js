const PORT = 3000;

var express = require('express');
var handlebars = require('express3-handlebars');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// set up templating
app.engine('handlebars', handlebars({
    layoutsDir: path.join(__dirname, 'views/layouts'),
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
    res.render('index');
});

app.listen(PORT, function(){
   console.log(`App running on port ${PORT}`) 
});
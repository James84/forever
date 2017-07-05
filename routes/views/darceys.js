let darceys = require('../../DAL/darceyRepository');

exports = module.exports.index = function(req, res) {
    darceys.Products(req, res);
} 

module.exports.view = function(req, res) {
    var id = req.params.id;
    
    if(id !== null)    {
        darceys.GetProductById(req, res, id);
    }
    else{
        for(var p in req.params){
            console.log(`Params: ${req.params[p]}`);
        }
        res.status(500).send('No id was present in the request');
    }
} 

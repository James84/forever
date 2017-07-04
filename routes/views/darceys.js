let darceys = require('../../DAL/darceyRepository');

exports = module.exports = function(req, res) {
    darceys.Products(req, res);
} 
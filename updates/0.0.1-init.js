let keystone = require('keystone'),
    User = keystone.list('User'),    
    Crafts = keystone.list('Crafts');

module.exports = function(next){
    
//    new Crafts.model({
//        name: 'test gallery'
//    }).save();
    
    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'admin@keystonejs.com',
        password: 'admin',
        canAccessKeystone: true
	})
	.save(next);
};
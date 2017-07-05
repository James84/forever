let keystone = require('keystone'),
    User = keystone.list('User');

module.exports = function(next){
    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: 'admin@keystonejs.com',
        password: 'admin',
        canAccessKeystone: true
	})
	.save(next);
};
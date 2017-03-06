var accounts = require('../lib/accounts.js'),
    fortune = require('../lib/fortune.js');

exports.home = function(req, res){
	res.render('home');
};

exports.about = function(req, res) {
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: 'qa/tests-about.js'
    });
};

exports.accounts = function(req, res) {
    res.render('accounts', {
        AccountList: accounts.getAccounts()
    });
};

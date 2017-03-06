var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var organizations = new AWS.Organizations();

var account_params = {
  MaxResults: 10,
//  NextToken: 'STRING_VALUE'
};

exports.getAccounts = function() {
        return organizations.listAccounts(account_params, function(err, data){
        if (err) console.log(err, err.stack); // an error occurred
        console.log(data);
        });
}

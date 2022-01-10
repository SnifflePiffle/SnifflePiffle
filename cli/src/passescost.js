const chalk = require('chalk');
const fs = require('fs');

const sendRequest = require('./utils/sendRequest.js');
const createURL = require('./utils/createURL.js');

module.exports = function(object) {
    let isReady = true;

    if (object.op1 == undefined || object.op2 == undefined ||object.datefrom == undefined || object.dateto == undefined || object.format != ("json" || "csv")){
        isReady = false;
        console.log(chalk.red('Missing parameters for this scope'));
        console.log(chalk.green('Needed Parameters:'));
        console.log(chalk.green('--station   |-s               ex: AO00'));
        console.log(chalk.green('--datefrom  |-df               ex: YYYYMMDD'));
        console.log(chalk.green('--dateto  |-dt               ex: YYYYMMDD'));
        console.log(chalk.green('You need to specify format:'));
        console.log(chalk.green('--format |-f               ex: json || csv'));
    }
    if(isReady){
        let baseUrl = createURL('/PassesCost/', object.op1, object.op2, object.datefrom, object.dateto, object.format);
        sendRequest('get', baseUrl);
        return;
    }
    else
        console.log(chalk.red('Terminating without sending GET request'));
};

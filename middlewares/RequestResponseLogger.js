//this is a js middleware that logs requests in logs.txt file
const fs = require('fs');
const moment = require('moment');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `\n${date}:
            IP- ${req.ip}
            Req- ${req.method}: ${req.path}\n`,
            (err, data) => {
                next();
            }
        );
    }
}

module.exports = { logReqRes };
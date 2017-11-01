let _films = require('./top250.json');
var bodyParser = require('body-parser');

function validateCreate(body) {
    if (body.id !== undefined && body.title !== undefined && body.rating !== undefined && body.year !== undefined && body.budget !== undefined && 
    body.gross !== undefined && body.poster !== undefined && body.position !== undefined) 
    {
        return true;
    }
        return false;
}

module.exports = {
    validateCreate
};
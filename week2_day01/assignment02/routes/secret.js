
var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
var MongoClient = require('mongodb').MongoClient

var crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';

function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypt = cipher.update(text, 'utf8', 'hex')
    crypt += cipher.final('hex');
    return crypt;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var decod = decipher.update(text, 'hex', 'utf8')
    decod += decipher.final('utf8');
    return decod;
}

console.log("abc");
/* GET home page. */
router.get('/', function (req, res, next) {
    var db = mongo.db("mongodb://localhost:27017/demo", { native_parser: true });
    db.bind('homework7');
    db.homework7.findOne({}, function(err, item){
        console.log(item);
        console.log("cdf");
        res.end(decrypt(item.message));
    })
});

module.exports = router;
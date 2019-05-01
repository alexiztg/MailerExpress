const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const email=require('./email')
const fs= require('fs')
router.use(bodyParser.json());
router.use(bodyParser());

router.post('/', init);

function init(req, res) {
	var d = req.body;
    console.log(d)
    var file = fs.readFileSync(__dirname + '/index.html', 'utf8');
    file = file.replace('correo', 'alexis@gabssa.net')
    var html=file;
    email.emailf(d.from, d.to, d.subject, d.text, html)
    .then(function(result){
        res.json(result)
    }) 

}

module.exports = router;
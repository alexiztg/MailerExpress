const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser());

router.post('/', init);

function init(req, res) {
	var d = req.body;
	console.log(d)
}

module.exports = router;
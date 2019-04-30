const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    //res.send("Prueba de lectura json")
    res.send({ hello: 'world',
                hello1: 'world',
                hello2: 'world',
                hello3: 'world'});
})

module.exports = router;
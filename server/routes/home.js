var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');

function contactExsit(name) {
    const files = fs.readdirSync('./contacts');
    console.log('files: ', files);
    boolfile=files.find(file=> file===body.userName)
    
        if (!boolfile)
            return false;

   
    return true;
}

router.get('/:name', (req, res,) => {
    const isExist = contactExsit(req.params.name)
    if (!isExist) {
        return res.status(400).send("please register")
    }
    const filesName = fs.readdirSync(`./contacts/${req.params.name}`);
    console.log(filesName)
     res.send(req.body)
    
});

module.exports = router;
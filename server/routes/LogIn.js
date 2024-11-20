var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');

function contactExsit(body) {
    const files = fs.readdirSync('./contacts');
    console.log('files: ', files);
    boolfile=files.find(file=> file===body.userName)
    
        if (!boolfile)
            return false;

   
    return true;
}

router.post('/', (req, res,) => {
    const isExist = contactExsit(req.body)
    if (!isExist) {
        return res.status(400).send("please register")
    }
    
     res.send(req.body)
    
});

module.exports = router;

    




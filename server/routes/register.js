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
    const nameExist = contactExsit(req.body)
    if (!nameExist) {
    fs.mkdirSync(req.body.userName, {recursive:true})  
    res.send(req.body)
    }
    else {
        return res.status(404).send("name already exist")
    }
});

module.exports = router;


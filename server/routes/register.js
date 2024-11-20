var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');
const path = require('path');
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
        console.log("path.join(req.body.userName, 'contacts',{recursive:true}): ", path.join(req.body.userName, 'contacts'));
    fs.mkdirSync(path.join("contacts", req.body.userName)  )
    res.send(req.body)
    }
    else {
        return res.status(400).send("name already exist")
    }
});

module.exports = router;


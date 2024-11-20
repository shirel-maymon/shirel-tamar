var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');
function contactExsit(body) {
    const files = fs.readdirSync('./contacts');
    files.forEach((file) => {
        const stats = fs2.statSync(file)
        if (stats.isDirectory() && file === body.userName)
            return true;

    })
    return false;
}

router.post('/', (req, res,) => {
    const nameExist = contactExsit(req.body)
    if (!nameExist) {
    fs.mkdirSync(req.body.userName, {recursive:true})  
    }
    else {
        return res.status(404).send("name already exist")
    }
});

module.exports = router;


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
    const isExist = contactExsit(req.body)
    if (!isExist) {
        return res.status(404).send("please register")
    }
    else {
        return res.status(200).send(`${req.body}`)
    }
});

module.exports = router;

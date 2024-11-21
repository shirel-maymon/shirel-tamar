var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');


router.get('/:name/:folder', (req, res,) => {
    const filesName = fs.readdirSync(`./contacts/${req.params.name}/${req.params.folder}`);
    res.send(filesName)

});
module.exports = router;
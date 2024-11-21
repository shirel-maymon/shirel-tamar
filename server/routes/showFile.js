var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');

function contactExsit(name, file) {
    const files = fs.readdirSync('./contacts');
    console.log('files: ', files);
     const boolfile=files.find(f=> f===file)
    
        if (!boolfile)
            return false;

   
    return true;
}

router.get('/:name/:file', (req, res,) => {
    const isExist = contactExsit(req.params.name, req.params.file)
    if (!isExist) {
        return res.status(400).send("please register")
    }
    const filesName = fs.readdirSync(`./contacts/${req.params.name}/${req.params.file}`);
    let content=fs.readFileSync(filesName)
     res.send(content)
    
});
module.exports = router;
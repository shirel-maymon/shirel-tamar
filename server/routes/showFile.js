var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');

function contactExsit(name, file) {
    const files = fs.readdirSync(`./contacts/${name}`);
    console.log('files: ', files);
     const boolfile=files.find(f=> f===file)
    
        if (!boolfile)
            return false;

   
    return true;
}

router.get('/:name/:file', (req, res,) => {
    const isExist = contactExsit(req.params.name, req.params.file)
    console.log('isExist: ', isExist);
    
    if (!isExist) {
        return res.status(400).send("file not exist")
    }
    console.log('req.params.file: ', req.params.file);
    const filesName = fs.readFileSync(`./contacts/${req.params.name}/${req.params.file}`, 'utf-8');
    let content=filesName
    console.log('content: ', content);

     res.send(content)
    
});
module.exports = router;
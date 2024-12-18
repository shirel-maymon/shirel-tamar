var express = require('express');
var router = express.Router();
const fs = require('fs');
const fs2 = require('node:fs');

function contactExsit(name, folder, file) {
    const files = fs.readdirSync(`./contacts/${name}/${folder}`);
    console.log('files: ', files);
     const boolfile=files.find(f=> f===file)
    
        if (!boolfile)
            return false;

   
    return true;
}
router.post('/:name/:folder', (req, res,) => {
    
    console.log('req.body: ', req.body);
    const isExist = contactExsit(req.params.name,req.params.folder, req.body.addfile)
    
    
    if (isExist) {
        return res.status(400).send("file is already exist")
    }
    
    fs.appendFile(`./contacts/${req.params.name}/${req.params.folder}/${req.body.addfile}`, req.body.addcontent , function (err) {
        if (err)
           { console.log('err: ', err);
            res.status(400).send("file did not renamed");}
        else{
            res.send(req.body.addfile)

        }
      });

    
})


router.get('/:name/:folder/:file', (req, res,) => {
    const isExist = contactExsit(req.params.name,req.params.folder, req.params.file)
    console.log('isExist: ', isExist);
    
    if (!isExist) {
        return res.status(400).send("file not exist")
    }
    console.log('req.params.file: ', req.params.file);
    const filesName = fs.readFileSync(`./contacts/${req.params.name}/${req.params.folder}/${req.params.file}`, 'utf-8');
    let content=filesName
    console.log('content: ', content);

     res.send(content)
    
});
router.delete('/:name/:folder/:file', (req, res,) => {
    const isExist = contactExsit(req.params.name, req.params.folder, req.params.file)
    console.log('isExist: ', isExist);
    
    if (!isExist) {
        return res.status(400).send("file not exist")
    }
    fs.rm(`./contacts/${req.params.name}/${req.params.folder}/${req.params.file}`, function (err) {
        if (err) res.status(400).send("file did not deleted");
        res.send("deleted");
       
      });
   

    
});
router.patch('/:name/:folder/:file', (req, res,) => {
    const isExist = contactExsit(req.params.name,req.params.folder, req.params.file)
    console.log('req.body: ', req.body);
    if (!isExist) {
        return res.status(400).send("file not exist")
    }
    fs.rename(`./contacts/${req.params.name}/${req.params.folder}/${req.params.file}`, `./contacts/${req.params.name}/${req.body.newname}`, function (err) {
        if (err) res.status(400).send("file did not renamed");
        res.send("file renamed");
       
      });

   

    
});

module.exports = router;



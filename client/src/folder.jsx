

import React, { useState, useEffect } from 'react'
import GetRequest from './GetRequest';
import ShowFile from './ShowFile';
import postRequest from './postRequest';
function Folder(props) {
    console.log('props: ', props);

    const [arrayFiles, setArrayFiles] = useState([])
    const [error, setError] = useState(null)
    const [showfile, setShowfile] = useState(false)
    const [addFile, setAddFile] = useState(false)
    const [newFile, setNewFile] = useState()
    const [addwork, setAddwork] = useState(null)
    const [newContent, setNewContent] = useState(null)
    console.log('newContent: ', newContent);
    const [addcomplited, setAddcomplited] = useState(false)

    useEffect(() => {
        getFiles()
    }, [])
    async function getFiles() {
        const url = `http://localhost:4001/showFolder/${props.userName}/${props.folder}`
        let array = await GetRequest(url)
        console.log('array: ', array);
        if (array !== 'something went wrong')
            setArrayFiles(await GetRequest(url))
        else {
            setError("error")
        }
    }
    const onsubmitAdd = async () => {

        const userObj = {
          addfile: newFile,
          addcontent: newContent
    
        }
        const url = `http://localhost:4001/showFile/${props.userName}/${props.folder}`
        const add = await postRequest(userObj, url);
        if (add === "something went wrong") {
          setAddwork("this file is already exist")
    
        }
        else {
          setAddwork("הקובץ נוסף בהצלחה")
          setArrayFiles((prev) => {
            const updatedArray = [...prev];
            updatedArray.push(newFile)
            return updatedArray
          });
          setAddcomplited(true)
          setAddFile(false)
    
        }}

    return (
        <>     {addFile &&
            <div>
              <input
                type="text"
                value={newFile}
                onChange={(e) => setNewFile(e.target.value)}
                placeholder="Enter new file name"
              />
               
               <input
                  type="text"
                  name='content'
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Enter new content"
                />
              <button onClick={onsubmitAdd}>submit</button>
            
    
            </div>}
         {addcomplited&&alert(addwork)}
            <div>{props.folder}</div>
            <button onClick={() => setShowfile(!showfile)}>show files</button>
            {showfile &&<>
            
                <button onClick={() => setAddFile(true)}>add file</button>
                <div id='container'>{Array.isArray(arrayFiles) && arrayFiles.map((file, i) => (<ShowFile i={i} setArrayFiles={setArrayFiles} folder={props.folder} arrayFiles={arrayFiles} userName={props.userName} file={file} setShowfile={setShowfile}/>))}  </div>
                </> } </>)
}
export default Folder;


import React from 'react'
import { useEffect, useState } from 'react'
import GetRequest from './GetRequest'
import DeleteRequest from './DeleteRequest'

import patchRequest from './PatchtRequest'

export default function ShowFile(props) {
  const [contentFile, setContentFile]=useState()
  const [err, setErr]=useState(null)
  const [contentClick, setContentClick]=useState(false)
  const [newFolderName, setNewFolderName] = useState('');
  const [deleteFile, setDeleteFile]= useState(null)
  const [deleteClick, setDeleteClick]=useState(false)
  const [renameFile, setRenameFile]= useState(null)
  const [renameClick, setRenameClick]=useState(false)
  const [submitRename, setSubmitRename]=useState(false)
 


    async function getcontent(){
      const url= `http://localhost:4001/showFile/${props.userName}/${props.folder}/${props.file}`
      console.log('url: ', url);
      
      const content=await fetch(url)
      const text = await content.text()
      if(content!=='something went wrong')
        setContentFile(text)
      else{
        setErr("error")
    
      }
      setContentClick(true);
   }
    

    const deleteContent = async () => {
       const url = `http://localhost:4001/showFile/${props.userName}/${props.folder}/${props.file}`
       const deleted=  await  DeleteRequest(url)
       if(deleted==='File deleted'){
         setDeleteFile("המחיקה הושלמה בהצלחה")
         props.setArrayFiles(props.arrayFiles.filter((file)=>file!==props.file))
       }
       else
        setDeleteFile("משהו השתבש במהלך המחיקה")
       
      
        setDeleteClick(true);
    };

    const onsubmitRename = async () => {
      console.log("renaming")
        let obj={newname:newFolderName}
        const url =  `http://localhost:4001/showFile/${props.userName}/${props.folder}/${props.file}`; 
        const renamed=  await  patchRequest(url,obj)
        console.log('renamed: ', renamed);
        if(renamed==='File renamed'){
          console.log("here")
          setRenameFile("השינוי הושלם בהצלחה")
          props.setArrayFiles((prev) => {
            const updatedArray = [...prev];
            updatedArray[props.i] = newFolderName; 
            return updatedArray
          }); 
        }
        else
        setRenameFile("משהו השתבש במהלך השינו")
      
      setSubmitRename(true);
      setRenameClick(false)
      
      
    }
    
    console.log(props.arrayFiles)  


    return (
      <>
        <div>{props.file}</div>
        {renameClick&&
        <div>
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="Enter new folder name"
          />
          <button onClick={onsubmitRename}>submit</button>
       
        
        </div>
}
        
        <button onClick={getcontent}>Show Content</button>
        <button onClick={deleteContent}>Delete</button>
        <button onClick={()=>  setRenameClick(true)}>rename</button>
        {deleteClick&&alert(deleteFile)}
        {submitRename&&alert(renameFile)}
        {contentClick && (
          <>
            {err ? (
              <div>{err}</div>
            ) : (
              <>
                <div>{contentFile}</div>
              </>
            )}
          </>
        )}
      </>
    );
  }
  
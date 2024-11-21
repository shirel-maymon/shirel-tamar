import React from 'react'
import { useEffect, useState } from 'react'
import GetRequest from './GetRequest'
import DeleteRequest from './DeleteRequest'

export default function ShowFile(props) {
  const [contentFile, setContentFile]=useState()
  const [err, setErr]=useState(null)
  const [contentClick, setContentClick]=useState(false)
  const [newFolderName, setNewFolderName] = useState('');
  const [deleteFile, setDeleteFile]= useState(null)
  const [deleteClick, setDeleteClick]=useState(false)
 


    async function getcontent(){
      const url= `http://localhost:4001/showFile/${props.userName}/${props.file}`
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
       const url = `http://localhost:4001/showFile/${props.userName}/${props.file}`
       const deleted=  await  DeleteRequest(url)
       if(deleted==='File deleted'){
         setDeleteFile("המחיקה הושלמה בהצלחה")
         props.setArrayFiles(props.arrayFiles.filter((file)=>file!==props.file))
       }
       else
        setDeleteFile("משהו השתבש במהלך המחיקה")
       
       setDeleteClick(true);

    };

    // const renameFolder = async () => {
    //   try {
    //     const url = `http://localhost:4001/renameFolder/${props.file}`; 
    //     const response = await fetch(url, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ newFolderName }), 
    //     });
  
    //     if (response.ok) {
    //       console.log('Folder renamed to:', newFolderName);
    //       setNewFolderName(''); 
    //     } else {
    //       setErr('Failed to rename folder');
    //     }
    //   } catch (error) {
    //     setErr('Error renaming folder');
    //     console.error(error);
    //   }
    // };
  


    return (
      <>
        <div>{props.file}</div>
        
        {/* <div>
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="Enter new folder name"
          />
          <button onClick={renameFolder}>Rename Folder</button>
        </div> */}
        
        <button onClick={getcontent}>Show Content</button>
        <button onClick={deleteContent}>Delete</button>
        {deleteClick&&alert(deleteFile)}
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
  
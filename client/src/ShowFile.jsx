import React from 'react'
import { useEffect, useState } from 'react'

export default function ShowFile(props) {
  const [contentFile, setContentFile]=useState()
  const [err, setErr]=useState(null)
  const [contentClick, setContentClick]=useState(false)
  const [newFolderName, setNewFolderName] = useState('');
  // const [newFileName, setNewFileName] = useState(''); 


    function handleShowContent(){

  useEffect(()=>{
    getcontent()
    },[])
    async function getcontent(){
      const url= `http://localhost:4001/showFile/${props.userName}/${props.file}`
      let content=await GetRequest(url)
      console.log('content: ', content);
   
     if(content!=='something went wrong')
        setContentFile(content)
      else{
        setErr("error")
    
      }
      setContentClick(true);
   }
    }

    const deleteContent = async () => {
      try {
        const url = `http://localhost:4001/delete/${props.file}`;
        const response = await fetch(url, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          console.log('File deleted:', props.file);
          setContentFile(null);
          setContentClick(false);
        } else {
          setErr('Failed to delete file');
        }
      } catch (error) {
        setErr('Error deleting file');
        console.error(error);
      }
    };

    const renameFolder = async () => {
      try {
        const url = `http://localhost:4001/renameFolder/${props.file}`; 
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newFolderName }), 
        });
  
        if (response.ok) {
          console.log('Folder renamed to:', newFolderName);
          setNewFolderName(''); 
        } else {
          setErr('Failed to rename folder');
        }
      } catch (error) {
        setErr('Error renaming folder');
        console.error(error);
      }
    };
  

    // const renameFile = async () => {
    //   try {
    //     const url = `http://localhost:4001/rename/${props.file}`;
    //     const response = await fetch(url, {
    //       method: 'PUT', // או POST לפי מה שתומך השרת
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ newFileName }), // שליחת השם החדש לשרת
    //     });
  
    //     if (response.ok) {
    //       console.log('File renamed to:', newFileName);
    //       setContentFile(null);
    //       setContentClick(false);
    //     } else {
    //       setErr('Failed to rename file');
    //     }
    //   } catch (error) {
    //     setErr('Error renaming file');
    //     console.error(error);
    //   }
    // };

    return (
      <>
        <div>{props.file}</div>
        
        <div>
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="Enter new folder name"
          />
          <button onClick={renameFolder}>Rename Folder</button>
        </div>
        
        <button onClick={handleShowContent}>Show Content</button>
        
        {contentClick && (
          <>
            {err ? (
              <div>{err}</div>
            ) : (
              <>
                <div>{contentFile}</div>
                <button onClick={deleteContent}>Delete</button>
              </>
            )}
          </>
        )}
      </>
    );
  }
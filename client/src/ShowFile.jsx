import React from 'react'
import { useEffect, useState } from 'react'

export default function ShowFile(props) {
  const [contentFile, setContentFile]=useState()
  const [err, setErr]=useState(null)
  const [contentClick, setContentClick]=useState(false)

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
  return (
  <>
    <div>props.file</div>
    <button onClick={handleShowContent}>show content</button>
    {contentClick&&
    err!==null?<div>{err}</div>:<div>{contentFile}</div>
}
  
    </>
  )
}

import React from 'react'
import { useEffect, useState } from 'react'
import GetRequest from './GetRequest'

export default function ShowFile(props) {
  const [contentFile, setContentFile]=useState()
  const [err, setErr]=useState(null)
  const [contentClick, setContentClick]=useState(false)
   
  async function getcontent(){
      const url= `http://localhost:4001/showFile/${props.userName}/${props.file}`
      const content=await fetch(url)
      const text = await content.text()
      console.log('content: ', text);
      console.log('content type: ', typeof text);
   
     if(content!=='something went wrong')
        setContentFile(text)
      else{
        setErr("error")
    
      }
      setContentClick(true);
   }
    
  return (
  <>
    <div>{props.file}</div>
    <button onClick={getcontent}>show content</button>
    {contentClick&&
    err!==null?<div>{err}</div>:<div>{contentFile}</div>
}
  
    </>
  )
}

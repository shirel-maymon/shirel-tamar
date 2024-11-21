import React from 'react'

export default function showFile(props) {
    function handleShowContent(){

  useEffect(()=>{
    getcontent()
    },[])
    async function getcontent(){
      const url= `http://localhost:4001/home/${props.userName}`
      let array=await GetRequest(url)
      console.log('array: ', array);
     if(array!=='something went wrong')
      setArrayFiles(await GetRequest(url))
      else{
        setError("error")
    
      }
   }
    }
  return (
  <>
    <div>props.file</div>
    <button onClick={handleShowContent}>show content</button>

  
    </>
  )
}

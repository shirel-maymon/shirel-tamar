import React, { useState, useEffect } from 'react'
import GetRequest from './GetRequest';
function Home(props) {
  const [arrayFiles, setArrayFiles]=useState([])
  const [error, setError]=useState(null)

  useEffect(()=>{
  getFiles()
  },[])
  async function getFiles(){
    const url= `http://localhost:4001/home/${props.userName}`
    let array=await GetRequest(url)
    console.log('array: ', array);
   if(array!=='something went wrong')
    setArrayFiles(await GetRequest(url))
    else{
      setError("error")
  
    }
 }
 



 
  
  return (
    <>
    <div>{arrayFiles}</div>
    </>
  )
}
export default Home;

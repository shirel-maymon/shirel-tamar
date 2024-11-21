import React, { useState, useEffect } from 'react'
import GetRequest from './GetRequest';
import Folder from './folder';
import ShowFile from './ShowFile';
function Home(props) {
  const [arrayFolders, setArrayFolders]=useState([])
  const [error, setError]=useState(null)

  useEffect(()=>{
    getFolders()
  },[])
  async function getFolders(){
    const url= `http://localhost:4001/home/${props.userName}`
    let array=await GetRequest(url)
    console.log('array: ', array);
   if(array!=='something went wrong')
    setArrayFolders(await GetRequest(url))
    else{
      setError("error")
  
    }
 }
 console.log(arrayFolders)
  
  return (
    <>
    <h1>hii</h1>
    {error!==null?error:
    <div id='container'>{Array.isArray(arrayFolders) && arrayFolders.map((folder,i) => (<Folder userName={props.userName} folder={folder} arrayFolders={arrayFolders} setArrayFolders={setArrayFolders}/>))}  </div>
  }
  </>)
}
export default Home;

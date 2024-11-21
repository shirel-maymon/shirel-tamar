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
    <body>
  <div id="navbar">
    <div className='font' id="site-name">shimar Drive</div>
    <div className='font' id="user-name">Hello, {props.userName}</div>
  </div>
  <div id="container">
  <h1>All your files and folders:</h1>
    {error!==null?error:
    <div id='container'>{Array.isArray(arrayFolders) && arrayFolders.map((folder,i) => (<Folder userName={props.userName} folder={folder} arrayFolders={arrayFolders} setArrayFolders={setArrayFolders}/>))}  </div>
  }
  </div>
</body>


  </>)
}
export default Home;

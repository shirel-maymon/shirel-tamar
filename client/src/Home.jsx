import React, { useState } from 'react'
import GetRequest from './GetRequest';
async function Home(props) {
  const [error, setError]=useState(null)
  const url= `http://localhost:4001/home/${props.userName}`
  const arrayFiles= await GetRequest(url);
  console.log(arrayFiles)
  if(arrayFiles==="something went wrong"){
    setError("this user does not exist")
    
  }
  // else{
  //   setError("good")

  // }
  
  return (
    <>

    </>
  )
}
export default Home;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './LogIn'
import Resgister from './Register'
import Home from './Home'

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
 {/* <Resgister userName={userName} setUserName={setUserName}/> */}
 <LogIn userName={userName} setUserName={setUserName}/>
 <Home userName={userName}/>
 </>

  )
}

export default App

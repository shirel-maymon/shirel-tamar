import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './LogIn'
import Resgister from './Register'

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
 <Resgister userName={userName} setUserName={setUserName}/>
 <LogIn userName={userName} setUserName={setUserName}/>
 </>

  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './LogIn'
import Resgister from './Register'
import Home from './Home'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShowFile from './ShowFile'
function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
 {/* <Resgister userName={userName} setUserName={setUserName}/> */}
 {/* <LogIn userName={userName} setUserName={setUserName}/> */}
 {/* <Home userName={userName}/> */}

 <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<LogIn userName={userName} setUserName={setUserName}/>} />

        <Route path="home" element={<Home userName={userName} setUserName={setUserName}/>}/>
        <Route path = "ShowFiles" element={<ShowFile />}/>
        
        </Route>

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>

 </>

  )
}

export default App

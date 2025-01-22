import { useState } from 'react'
import { StrictMode } from "react"
import Navbar from "./Navbar"
import Textform from "./Textform"
import About from "./About"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Alert from './Alert'

function App() {
  const [mode,setmode]=useState('light')
  const [alert, setalert]=useState(null)

  const showalert=(messege, type)=>{
    setalert(
      {
        msg: messege,
        type: type
      }
    )
  }

  setTimeout(()=>{
  setalert(null)
  }
 ,1500 )


const toggleMode=()=>{
 if (mode === 'light') {
  setmode('dark');
  document.body.style.backgroundColor = '#274b80'
  showalert('enable dark mode','success')
  document.title = 'dark mode'
  setInterval(()=>{
    document.title = 'dark mode is on' 
  } ,2000)

  setInterval(()=>{
    document.title = 'install text utils' 
  } ,1500)

 } else {
  setmode('light');
  document.body.style.backgroundColor = 'white'
  showalert('enable light mode','success')
  document.title = 'light mode'
 }
 console.log("light")
}

  return (
  <>
  {/*<Router>*/}
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <Textform showalert={showalert}/>
     {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/textform" element={<Textform/>} />
      </Routes>
  </Router>*/}
   </>
  )
  
}


export default App

import React from 'react'
import { useState } from 'react';
export default function NavBar(props) {
  const [darkStatus, setDarkStatus] = useState("Enable")

    const toggleDarkMode=()=>{
    if( document.body.style.backgroundColor==="rgb(20, 22, 23)"){

      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      document.getElementById("moreButton").classList.remove("text-danger");
      props.invert("")
      setDarkStatus("Enable");
      
      
    }
    else{
      document.body.style.color="white";
      document.body.style.backgroundColor="rgb(20, 22, 23)";
      document.getElementById("moreButton").classList.add("text-danger");
      props.invert("invert")
      setDarkStatus("Disable");
      
    }
  }

  return (
    <div className='text-center'>

<nav className="navbar navbar-dark bg-dark text0c">
  <div className="container-fluid">
    <h1 className="navbar-brand " href="/" style={{cursor:'pointer'}}>QR Code Generator</h1>
        <button className="btn btn-outline-danger" type="submit" onClick={toggleDarkMode}>{`${darkStatus} Dark Mode`}</button>


  </div>
</nav>
    </div>
  )
}


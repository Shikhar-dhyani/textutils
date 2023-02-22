
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  
  const [alert, setAlert] = useState(null)
  const [Mode, setMode] = useState("light")

  const changeAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(Mode==="dark"){
     setMode('light')
     document.body.style.color='black'
     document.body.style.backgroundColor='white'
     changeAlert("Light Mode has Been Enabled","success")
    }
    else {
     setMode('dark')
     document.body.style.color='white'
     document.body.style.backgroundColor='#15212c'
     changeAlert("Dark Mode has Been Enabled","success")
    }
    }

  return (
    <>
    <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div name="container my-3">
    <TextForm heading="Enter the text to analyze below" Mode={Mode} alert={alert} changeAlert={changeAlert}/>
    {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;

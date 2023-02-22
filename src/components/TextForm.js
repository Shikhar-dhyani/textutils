import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.changeAlert("Text has been Changed into Upper Case","success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.changeAlert("Text has been Changed into Lower Case" , "success")
  }

  const handleTAClick = () => {
    let words=text.split(" ").length
    let newText = (words*0.8).toFixed(2) + " Minute read             Total Words => " + words + "     Total Characters "+ text.length
    setData(newText);
  }

  const handleClrClick = () => {
  
    let newText = ""
    setText(newText);
    setData("Text Analysis will be Done Here , Click Above Button :")
    props.changeAlert("Text has been cleared ","success")
  }
  


  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const bold = () => {
    var target = document.getElementById("myBox");
    if(target.style.fontWeight === "bolder" )
   { target.style.fontWeight = "normal" 
     props.changeAlert("Text has been Normalalized","success")
     
   }
    else{
      target.style.fontWeight = "bolder" 
      props.changeAlert("Text property set to Bold","success")
    }
    

  }
  const italics = () => {
    var target = document.getElementById("myBox");
    if(target.style.fontStyle === "italic" )
   {
    target.style.fontStyle = "normal"
    props.changeAlert("Text has been Normal","success")
   }  
    else 
    {
      target.style.fontStyle = "italic" 
      props.changeAlert("Text property set to Italic","success")
  }
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  const [Data , setData]=useState(" Text Analysis will be Done Here , Click Above Button :)")

  return (
    <>
      <div className="container "  >
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control " style={{color :props.Mode==="dark"?"white":"black" , backgroundColor: props.Mode==="dark"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        

        
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowerCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleTAClick}>
        Text Analysis
        </button>
        
        <button className="btn btn-primary mx-2" onClick={italics}>
         Italics
        </button>

        <button className="btn btn-primary mx-2" onClick={bold}>
         BOLD
        </button>

        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>

        <button className="btn btn-primary mx-2" onClick={handleClrClick}>
        Clear Button
        </button>

      </div>
        <div className="container my-2" >
        <textarea className="form-control my-2" style={{color :props.Mode==="dark"?"white":"black" , backgroundColor: props.Mode==="dark"?"black":"white"}} value={text.length===0?"Enter text to analyse it":Data} id="myBox" rows="1"></textarea>
        <h2>Text Preview </h2>
        {text.length===0?"Enter your Text in Above field to preview it. ":text} 
       </div>

       
    </>

  )
}

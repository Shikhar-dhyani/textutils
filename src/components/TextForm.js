import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleTAClick = () => {
    let words=text.split(" ").length
    let newText = (words*0.8).toFixed(2) + " Minute read             Total Words => " + words + "     Total Characters "+ text.length
    setData(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  const [Data , setData]=useState(" Text Analysis")

  return (
    <>
      <div className="container ">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
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

      </div>
        <div className="container my-2">
        <textarea className="form-control my-2" value={Data} onChange={handleOnChange} id="myBox" rows="1"></textarea>
        <h2>Text Preview </h2>
        {text} 
       </div>

       
    </>

  )
}

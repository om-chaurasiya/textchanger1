import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("Enter text here");
  const handleupclick = () => {
    console.log("uppercase has been clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","Success")
  };

  const handlelow = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","Success")
  };

  const handleonchange = (event) => {
    //console.log("uppercase has been clicked")
    setText(event.target.value);
  };

  const handleclear = () => {
    setText("");
    props.showAlert("Text cleared","Success")
  };

  const handle_remove=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra space has been removed","Success")
  }

  const handle_copy=()=>{
      var text=document.getElementById("exampleFormControlTextarea1")   ;

     text.select();
     navigator.clipboard.writeText(text.value);
   
     props.showAlert("Copied to clipboard","Success")

  }

  return (
    <>
      <div className="container my-3 " style={{color:props.mode==='light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 ">
          <textarea
            className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}
            value={text}
            onChange={handleonchange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleupclick} >
          Convert To Uppercase
         
        </button>
        <button className="btn btn-primary ms-3" onClick={handlelow}>
          Conver To Lowercase
        </button>
        <button className="btn btn-primary ms-3" onClick={handleclear}>
          Clear Text
        </button>

        <button className="btn btn-primary ms-3" onClick={handle_remove}>
         Remove extra space
        </button>

        <button className="btn btn-primary my-3 ms-3" onClick={handle_copy}>
         Copy
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <h3>
          {text.split(" ").length} words and {text.length} characters
        </h3>
        <h3>{0.008 * text.split(" ").length} Minutes reads</h3>

        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
};

export default Textform;

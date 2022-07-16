import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    // console.log("handleUp Clicked " + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", 'Success', 'success');
  };
  const handleLowClick = () => {
    // console.log("handleUp Clicked " + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", 'Success', 'success');
  };
  const handleResetClick = () => {
    // console.log("handleUp Clicked " + text)
    // let newText = text.toLowerCase();
    setText("");
    props.showAlert("Text Area Reset", 'Success', 'success');
  };
  const handleOnChange = (event) => {
    // console.log("Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <div className="container my-2">
      <button className="btn btn-primary " onClick={handleupClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-danger" onClick={handleResetClick}>
        Reset
      </button>
      </div>

      <div className="container mt-2 ml-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words, {text.length} Characters</p>
      <p>{text.split(" ").length * 0.008} Minutes to Read</p>
      </div>
        
    <div className="container my-3">
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox to preview it here."}</p>
    </div>
    </div>
    </div>
  );
}

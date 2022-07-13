import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    // console.log("handleUp Clicked " + text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("handleUp Clicked " + text)
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleResetClick = () => {
    // console.log("handleUp Clicked " + text)
    // let newText = text.toLowerCase();
    setText("");
  };
  const handleOnChange = (event) => {
    // console.log("Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div>
    <div className="container">
    <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleupClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-danger" onClick={handleResetClick}>
        Reset
      </button>
      <div className="container mt-2 ml-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words, {text.length} Characters</p>
      <p>{text.split(" ").length * 0.008} Minutes to Read</p>
      </div>
        
    </div>
    <div className="container my-3">
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </div>
  );
}

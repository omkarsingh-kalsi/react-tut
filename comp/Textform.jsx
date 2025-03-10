import React, { useState } from "react";

function Textform(props) {
  const handelupclick = () => {
   // console.log("you have clicked on uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('converted to uppercase' ,'success')
  };
  const handelloclick = () => {
   // console.log("you have clicked on uppercase" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('converted to lowercase','success')
  };
  const handelonchange = (event) => {
    setText(event.target.value);
  };

  const handelctclick = () => {
    let newText = ""
    setText(newText);
    props.showalert('cleared text' ,'success')
  };

  const handeltrclick = () =>{ 
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert('space removed','success')
  };

  let [text, setText] = useState("");

  return (
    <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
      <div
        className="container"
      >
        {/*<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>*/}
        <h1 className="container ">Enter text here</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handelonchange}
          style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" ,color: props.mode === "dark" ? "white" : "black" }}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>

        <button className="btn btn-primary mx-1" onClick={handelupclick}>
          Uppercase
        </button>
        <button className="btn btn-primary  mx-1" onClick={handelloclick}>
          Lowercase
        </button>
        <button className="btn btn-primary  mx-1" onClick={handelctclick}>
          Clear text
        </button>
        <button className="btn btn-primary  mx-1" onClick={handeltrclick}>
          Remove Space
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        
      </div>
    </div>
  );
}

export default Textform;

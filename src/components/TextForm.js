import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const HandleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const HandleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const HandleEsClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={HandleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-3" onClick={HandleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-danger mx-3" onClick={HandleClearClick}>
          Clear
        </button>

        <button className="btn btn-danger mx-3" onClick={HandleEsClick}>
          Remove extra space
        </button>

        <h1 className="my-3">Your text summery</h1>
        <p>
          <strong>{text.split(" ").length}</strong> words, and{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").length}</strong> minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

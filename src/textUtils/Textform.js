import React, { useState } from "react";

const Textform = (props) => {
  const handelUpClick = () => {
    // console.log("It works");
    let newText = text.toUpperCase();
    setText(newText);
    props.alertFun("Noob coder just updated your text!");
  };

  const handelLoClick = () => {
    // console.log("It works");
    let newText = text.toLowerCase();
    setText(newText);
    props.alertFun("Noob coder just updated your text!");
  };

  const handelClear = () => {
    // console.log("It works");
    setText("");
    props.alertFun("Noob coder just updated your text!");
  };

  const handelCopy = () => {
    // console.log("It works");
    let contText = document.getElementById("exampleFormControlTextarea1");
    contText.select();
    navigator.clipboard.writeText(contText.value);
    // alert("Text Copied");
  };

  const handelOnChange = (event) => {
    console.log("handel on change was clicked ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
     

      <div className="mb-3 my-5" style={props.style}>
        <div className="container text-center">
        <p>Hey! This is a simple text util app made with React. Here you can do some simple editings with your text. This app is just a practice project and it is still under development. Checkout all the features and especially the Dark mode. If you find any bug please report it to the developer. Karan Sharma ig. karan_sharma.02</p>
          <label for="exampleFormControlTextarea1" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handelOnChange}
            placeholder="Enter text here..."
            style={props.style}
          ></textarea>

          <div className="container text-center ">
            <button
              type="button"
              onClick={handelUpClick}
              className="btn btn-success my-3 mx-2 "
            >
              Convert to upper text
            </button>
            <button
              type="button"
              onClick={handelLoClick}
              className="btn btn-warning my-3 mx-2"
            >
              Convert to lower text
            </button>
            <button
              type="button"
              onClick={handelClear}
              className="btn btn-danger my-3 mx-2"
            >
              Clear text
            </button>

            {/* Copy text btn  */}
            {/* <button
              type="button"
              onClick={handelCopy}
               className="btn btn-info my-3 mx-2"
            >
              Copy Text
            </button> */}
          </div>
        </div>

        <div className="container my-4 text-center">
          <h3>Your text summary: </h3>
          <p>
            Your text has{" "}
            <span className="badge bg-secondary">
              <b>{text.split(" ").length}</b>
            </span>{" "}
            words and{" "}
            <span className="badge bg-secondary">
              <b>{text.length}</b>
            </span>{" "}
            characters!
          </p>
          <p>
            It would take around{" "}
            <span className="badge bg-secondary">
              {" "}
              <b>{0.008 * text.split(" ").length}</b>
            </span>{" "}
            minutes if you read.
          </p>
        </div>
      </div>
    </>
  );
};

export default Textform;

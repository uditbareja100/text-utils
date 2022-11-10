import React,{useState} from 'react';

export default function Main(props) {
  const [text, setText] = useState("");
  // text = "Hii Updated Text"; wrong way to update
  // setText("");  correct way of updating the state

  const clickHandlerUppr = () =>{
    console.log("You click the upperCase Button");
    let newText =  text.toUpperCase();
    setText(newText);
  }
  const clickHandlerLppr = () =>{
    console.log("You click the lowerCase Button");
    let newText =  text.toLowerCase();
    setText(newText);
  }
  const clickHandlerClr = () =>{
    console.log("You click the Clear Button");
    setText("");
  }
  const handlerOnChange = (e) =>{
    console.log("change");
    setText(e.target.value);
  }

  return (
    <>
     <div className="container">
       <h1>{props.heading}</h1>
       <div className="container">
       <textarea className="form-control" rows="9" onChange={handlerOnChange} value={text}></textarea>
       </div>
       <div className="container my-2 mx-2">
       <button className="btn btn-outline-primary mx-2" onClick={clickHandlerUppr}>Convert to UpperCase</button>
       <button className="btn btn-outline-success mx-2" onClick={clickHandlerLppr}>Convert to LowerCase</button>
       <button className="btn btn-outline-warning mx-2" onClick={clickHandlerClr}>Clear TextArea</button>
       </div>
       <div className="container">
         <h2>Your text summary</h2>
         <p> {text.split(" ").length} : words & {text.length} : characters</p>
         <p> {0.008 * text.split(" ").length } : Minutes to Read</p>
       </div>
     </div>
    </>
  )
}
import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
  //  console.log("Upper case was clicked"); 
  //  setText("You have clicked on handleUpClicked"+text);
   let newText=text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to uppercase","success");
  }
  const handleLowClick=()=>{
    // setText("You have clicked on handleUpClicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");

   }
   const handleClearClick=()=>{
    // setText("You have clicked on handleUpClicked"+text);
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared","success");

   }
   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleinverseclick = () => {
    // console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Text is reversed","success");

  };
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("failed to copy the text: " + err));
  }; 
  const handleOnChange=(event)=>{
    // console.log("OnChange"); 
    setText(event.target.value);
   }
  const [text,setText]=useState('');
 
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleinverseclick}>Inverse</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          {copied ? "Copied" : "Copy to Clipboard"}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in text box to preview here"}</p>
    </div>
    </>
  );
}

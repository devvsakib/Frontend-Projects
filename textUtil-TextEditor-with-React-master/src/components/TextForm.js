import React, {useState} from 'react';


export default function TextForm(props){
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked!!");
        let newtext = text.toUpperCase();
        setText(newtext);
    }   
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
        //console.log(text);
    }
    const clearText = (event)=>{
        //console.log("On Change");
        setText('');
        //console.log(text);
    }
    const handleDownClick = ()=>{
        let newtext2 = text.toLowerCase();
        setText(newtext2);
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');
    
    return(
        <>
        <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1 style={{color: props.mode ==='dark'?'white':'#042743'}}>{props.heading}</h1>
            <form>
            <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#042743':'white',color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  </form>
  <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Upper Case</button>

  <button className="btn btn-primary mx-2 my-3" onClick={handleDownClick}>Convert to Lower Case</button>
  <button className="btn btn-primary mx-2 my-3" onClick={clearText}>Clear Text</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className='container my-3 ' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length } Minutes to read the paragraph</p>
            <h2>Preview</h2>
            <p>{text}</p> 
        </div>
        </>
    )
}
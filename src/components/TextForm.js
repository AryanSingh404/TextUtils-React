import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("The text in uppercase " , "success");
    }
    
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("The text in Lowercase " , "success");
    }
    
    const handleClearText = () => {
        let newText = "";
        settext(newText)
        props.showAlert("Text was cleared " , "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");

    } 

    

    const handleBinary =()=> {
        
        let output = document.getElementById("myform");
        let input = document.getElementById("myform").value;
        output.value = "";
        for (var i = 0; i < input.length; i++) {
            output.value += input[i].charCodeAt(0).toString(2) + " ";
        }
        // props.showAlert("The text is in Binary form " , "success")
    }
    
    
    const handleOnchange = (event) => {
        settext(event.target.value)
        
    }

    // for set text value 
    const [text, settext] = useState("");

       
        return (
        <>
            <div>
                <h1 style={{color: props.mode=== 'dark'? 'white' : 'black'}}>{props.heading}</h1>
                <p style={{fontSize:"10px" , color: props.mode=== 'dark'? 'white' : 'black' }}>@ryanSingh💪🤟🤟🔥🔥🔥</p>
                <div className="mb-3" >
                    <textarea  className="form-control" value={text} onChange={handleOnchange}  style={{backgroundColor: props.mode === 'dark'?'rgb(77, 77, 77)':'white' , color: props.mode=== 'dark'? 'white' : 'black'}} id="myform" rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary  my-1" onClick={handleLoclick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleBinary} >Binary Convert</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary  my-1" onClick={handleClearText} >Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode=== 'dark'? 'white' : 'black'}} >
                <h2>Your Text Summary</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text: "Nothing To Preview Here ;)"} </p>
            </div>
            
        </>
    )
}
    
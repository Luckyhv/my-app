import React,{useState} from 'react'

export default function TextForm(props) {
  const uppercase = ()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showalert("Converted to Upper Case","success")
  }

  const lowercase = ()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showalert("Converted to Lower Case","success")
  }

  const wordcount = ()=>{
    if(text===""){
      return 0;
    }
    else{
      let newtext=text.trim();
      let words=newtext.split(" ");
      return (words.length);
    }
  }

  const time = ()=>{
    if(text===""){
      return 0;
    }
    else{
      let newtext=text.trim();
      let words=newtext.split(" ");
      let tim=0.008*(words.length);
      return (tim);
    }
  }

  const swapcase = ()=>{
    let newtext="";
    for(var i=0;i<text.length;i++)
    {
      if(text[i]===text[i].toLowerCase()){
        newtext+=text[i].toUpperCase()
      }
      else{
        newtext+=text[i].toLowerCase()
      }
    }
    setText(newtext)
    props.showalert("Swapped Case","success")
  }

  const copytext = ()=>{
    var copt= document.getElementById("textinput");
    copt.select();
    navigator.clipboard.writeText(copt.value);
    document.getSelection().removeAllRanges();
    props.showalert("Copied Text","success")

  }
  
  const removespacen = ()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(""));
    props.showalert("Removed All Spaces","success")
  }

  const removespaces = ()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Removed Extra Spaces","success")

  }

  const cleartext = ()=>{
    let newtext="";
    setText(newtext)
    props.showalert("Cleared Text","success")
  }

  function handlechange(event){
    setText(event.target.value);
  }
  const[text,setText]=useState("");
  return (
  <>   
  <div className='container'>
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handlechange} id="textinput" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={uppercase}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2 " onClick={lowercase}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={swapcase}>SwapCase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" data-toggle="tooltip" data-placement="bottom" onClick={copytext} title="Copy Text">Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={removespacen}>Remove Spaces</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={removespaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={cleartext}>Clear Text</button>
  </div>
  <div className='container my-3'>
    <h1>Text Summary</h1>
    <p>
      {wordcount(text)} Words and {text.length} Characters</p>
      <p>{time(text)} Minutes to read the text</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something to Display"}</p>
  </div> 
  </>
  )
}
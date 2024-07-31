import React,{useState} from 'react'



const TextForm = (props) => {
    const click1 =() =>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const click2 =() =>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const change =(event) =>{
        setText(event.target.value);
    }
    const[text,setText]=useState('Enter text here');
  return (
  

  <div className=" container mb-3">
   <h1>{props.heading}</h1>
    <label for="box1" class="form-label">Make Your Text Into UpperCase</label>
    <textarea className="form-control ml-3 mr-3" value={text} onChange={change} id="box1"  rows="8"></textarea>
    <br/>
    <button  className="btn btn-primary" onClick={click1}>Convert To UpperCase</button> 
    <br/>
    <br/>
    <button  className="btn btn-primary" onClick={click2}>Convert To LowerCase</button>
  </div>

 )
}

export default TextForm

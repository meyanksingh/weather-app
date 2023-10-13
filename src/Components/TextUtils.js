import React, { useState } from 'react';

const Textarea = ({props}) => {
  const [text,newText]=useState('Enter Your Text Here')



  const Handleonchange=(event)=>{
    console.log('Handling onchange');
    newText(event.target.value);
    
  }
const HandleLowerChange=(event)=>{
  let x = text.toLowerCase()
  newText(x)
}

  const Handleonclick=()=>{
    console.log('Handling click'+text)
    let setText = text.toUpperCase()
    newText(setText)
  }
  const HandleClear=()=>{
    newText('')

  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className='mb-3' >
        <textarea className='form-control' value={text} onChange={Handleonchange} id='myBox' rows='8'></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={Handleonclick}>Convert TO Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={HandleLowerChange}>Convert TO Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={HandleClear}>Clear Text</button>
    </div>
    <div className='container'>
      <p>The total Lenght of your Testing character is {text.length}, The Length of your Total Words is {text.split(' ').length}</p>
      <h2>{props.h2heading}</h2>
      <p>{text}</p>
    </div>
    </>
  );
};

export default Textarea;
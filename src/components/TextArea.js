import React ,{useState} from 'react'

export default function TextArea(props) {

    const [text , setText] = useState('Enter Text');
    
   
  const handleOnChnage = (e)=>{
    
    setText(e.target.value);
    // console.log(text.split(" ").lengths)
  }

    return (
    <>
<div className="mb-3 my-3 container">
  <label  className="form-label">{props.title}</label>
  <textarea className="form-control" value={text} onChange={handleOnChnage} id="exampleFormControlTextarea1" rows="3"></textarea>
  {/* <button className='btn btn-primary my-3' onClick={upperCase}>{upLowToggle}</button> */}
  <p>{text.split(" ").length} word and {text.length} charactors</p>
  <p>{text}</p>
</div>
    </>
  )
}

import React, {useState} from 'react';


export default function TextForm(props) {
  
  

  const handleUpClick = () => {
    // console.log(`Uppercase was clicked ${text}`);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase!","success");
  }

  const handleLoClick = () => {
    // console.log(`Lowercase was clicked ${text}`);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase!","success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("TextArea is cleared!","success")
  }

  const handleOnChange = (event) => {
    // console.log('handle on change');
    setText(event.target.value);
    // setState({ length: e.target.value.split(' ').length })
  }

  //copying all the text from textarea 
  const handleCopy = () => {
    // var text = document.getElementById('myBox');
    // text.select();  
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("TextArea is copied to clipboard!","success")
  }

  //removing extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed","success")
  }

  //counting vowels in a word
  const countVowels = () => {
    let storeText = text;
    let match = storeText.match(/[aeiou]/gi);
    if(storeText === ''){
      setCount(0)
      props.showAlert("No vowel has been counted","danger")
    }
    // else if(storeText !== (/[aeiou]/gi)){
    //     setCount(0)
    //     props.showAlert("No vowel has been counted","danger")
    // }
    else if(storeText === ''){
        setCount(0);
    }
    else{
      setCount(match.length)
      props.showAlert("Vowel has been counted","success")
    }
    
  }

  // const countWord = () => {
  //   let word = text.split(" ");
  //    word = word.filter(word => word !== '').length;
  //   console.log(word);
  //   setwordLength(word);
  // }
 
  const [text, setText] = useState('');
  const [count, setCount] = useState(null);
  // const [word, setwordLength] = useState(0);
  return (
    <>
    <div style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={countVowels}>Count Vowels</button>


        {/* <button className="btn btn-primary mx-1" onClick={countWord}>Count word</button> */}

    </div>
    <div className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((ele) => {return ele.length!==0}).length} words and {text.length} characters</p>
      {/* <p>{word} words </p>
      <p>{text.length} characters</p> */}
      {/* <p>{0.008 * text.split(' ').length} Minutes takes to read</p> */}
      <p>{0.008 * text.split(/\s+/).filter((ele) => {return ele.length!==0}).length} Minutes takes to read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter Something in the textbox to preview here "}</p>

      <p>Vowel Counts: {count}</p> 
    </div>
    </>
  ) 
}

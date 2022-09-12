//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";




function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert ({
      msg: message,
      type: type 
    })
    setTimeout(() =>
      setAlert(null)
    ,1500);
  }

  const [mode, setMode] = useState('light');

  const [btnText, setbtnText] = useState('Enable dark mode');

  const [btntextColor, setbtntextColor] = useState('dark');

  const removeBodyClass = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyClass();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setbtnText('Enable dark mode');
      setbtntextColor('dark')
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils - Light mode'
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setbtnText('Enable light mode');
      setbtntextColor('light')
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark mode'
    }
  }
  return (
    <>
    <Navbar  title="TextUtils"  aboutText="About" mode={mode} toggleMode={toggleMode} btnText={btnText} btntextColor={btntextColor} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/> */}
    {/* <About /> */}
    
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>} />
        <Route exact path="about" element={<About mode={mode} />} />
      </Routes>
      </div>
    </>
  );
}

export default App;

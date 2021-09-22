import React, { useState } from 'react'
import Alert from './components/Alert';


import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {

  // Alert messages 
  const [alert, setAlert] = useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg : message,
      type : type 
    })

    setTimeout(()=>{
      setAlert(null);
    }, 900);

  }
  
  const [modeText, setModeText] = useState("Enable Dark Mode")
  
  const [mode, setmode] = useState('light')
  
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      setModeText('Enable light Mode')
      document.body.style.backgroundColor = "rgb(32, 53, 81)"
      showAlert("Dark mode is enabled" , "success")
    }
    else {
      setmode('light')
      setModeText('Enable Dark Mode')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled"  , "success")
    }
  }

  // const [greenModeText, setGreenModeText] = useState("Enable Green Mode")
  
  // const [greenMode, setGreenMode] = useState('light')
  
  // const toggleGreenMode = () => {
  //   if (greenMode === 'light') {
  //     setGreenMode('dark')
  //     setGreenModeText('Enable light Mode')
  //     document.body.style.backgroundColor = "#014601f0"
  //     showAlert("Green Dark mode is enabled" , "success")
  //   }
  //   else {
  //     setGreenMode('light') 
  //     setGreenModeText('Enable Green    Mode')
  //     document.body.style.backgroundColor = "white"
  //     showAlert("Light mode is enabled"  , "success")
  //   }
  // }
  // toggleGreenMode={toggleGreenMode} greenMode={greenMode} greenModeText={greenModeText} 


  return (
    <>
      <Router>
      <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert  alert= {alert} />

      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="This is your box use this piece of shit   ;) " mode={mode} /> 
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;

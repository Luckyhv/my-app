import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode]= useState("light");
  const[alert,setAlert]= useState(null);

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const change= ()=>{
    if(mode==="light"){
      setMode("dark");
      showalert("Dark Mode Enabled","success")
    }
    else{
      setMode("light");
      showalert("Light Mode Enabled","success")
    }
  }
  return (
    <>
    { /* <Router> */ }
    <Navbar title="TextUtils" about="About US" mode={mode} change={change}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/">  */}
           <TextForm heading="Enter Your Text" mode={mode} showalert={showalert}/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
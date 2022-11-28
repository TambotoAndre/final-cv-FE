// import logo from './logo.svg';
import React, {Component} from 'react';
import Header from "./components/header";
import Nav from "./components/nav";
// import OutlineTypesExample from './components/Button';
import BasicExample from './components/Card';
import "./App.css";
import Isi from './components/isi';
import Isiabm from './components/isiabm';
import Isiedu from './components/isiedu';
import Sk from './components/sk';

// import './style/headerstyle.css';

function App() {
  return (
    <div>
       <Header/>
      <Nav/>
      <Isiabm/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>About Me</h1>
      {/* <OutlineTypesExample/> */}
      <BasicExample/>
      <Isi/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Isiedu/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Sk/>


    </div>

  );
}

export default App;


 

import './App.css';
import React from 'react';
import Main from './components/Main';
 import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Login from  '../src/components/Login'
import {Routes , Route} from "react-router-dom"
import Detail from './components/Detail';
import Footer from './components/Footer';


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/signin' element ={<SignIn/>}/>
        <Route path='/' element ={<Main/>}/>
        <Route path='/detail' element ={<Detail/>}/>
      </Routes>
      <Footer/>


      
    </div>
  );
}

export default App;

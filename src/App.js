import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

import axios from 'axios'
import Navbar from './Component/Navbar';
import Body from './Component/Body';
import Footer from './Component/Footer';
function App() {
const [score, setScore] = useState();



  return (
    
    <div className="App">
     <Navbar setScore={setScore} />
    <Body score={score}/>
   <Footer/>
    </div>
  );
}

export default App;

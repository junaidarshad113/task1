import {useState} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import InputField from './components/InputField'
import Addbtn from './components/AddBtn' 
import Footer from './components/Footer'

function App() {
  return(
    <div>
      <NavBar />
      <InputField />
      <Addbtn />
      <Footer />
      

    </div>
  );
}
export default App;

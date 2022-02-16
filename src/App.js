import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Slider from './components/Slider';
import Navbar from './components/navBar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/slider' element={<Slider/>} />
    <Route path='/navbar' element={<Navbar/> } />
    
  
    </Routes  >
    </BrowserRouter>
  );
}

export default App;

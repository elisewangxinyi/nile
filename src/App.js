import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Individuals from './views/Individual';
import Merchants from './views/Merchants';
import About from './views/About'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/individuals' element={<Individuals/>}/>
      <Route exact path='/merchants' element={<Merchants/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
  );
}

export default App;

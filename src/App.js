import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Individuals from './views/Individual';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/individuals' element={<Individuals/>}/>
      <Route exact path='/merchants' element={<Home/>}/>
      <Route exact path='/about' element={<Home/>}/>
    </Routes>
  );
}

export default App;

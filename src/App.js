import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import SongList from './SongList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/SongList' element={<SongList />}></Route>
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
    
}

export default App;

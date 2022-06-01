import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import SongForm from './SongForm';
import SongList from './SongList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/SongList' element={<SongList />} />
        <Route path='/about' element={<About />} />
        <Route path='/SongForm' element={<SongForm />} />
      </Route>
    </Routes>
  )
    
}

export default App;

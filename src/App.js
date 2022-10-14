
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Header from './Pages/Share/Header'
import { AnimatePresence} from 'framer-motion'


function App() {
  return (
    <div>
      <AnimatePresence>
      <Header></Header>

      <Routes>        
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/menu' element={<Menu></Menu>} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

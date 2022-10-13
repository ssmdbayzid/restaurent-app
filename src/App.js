import logo from './logo.svg';
import './App.css';
import Header from './Pages/Share/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';

function App() {
  return (
    <div className="">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/menu' element={<Menu></Menu>} />
      </Routes>
      
    </div>
  );
}

export default App;

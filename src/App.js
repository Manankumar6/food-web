
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CartProvider from './components/ContextReducer';
import Myorder from './Pages/Myorder';

function App() {
  return (
    
    <>
    <CartProvider>

    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/myorder' element={<Myorder/>}/>
    </Routes>
    </CartProvider>

    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;

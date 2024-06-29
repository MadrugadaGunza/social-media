// styles
import './App.css';
// dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Header from './components/header/Header';
// pages
import Home from './pages/Home';
import Story from './pages/Story';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story' element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

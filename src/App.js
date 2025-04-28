import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js'; 
import './App.css';
import Board from './pages/Board.js';
import Header from './components/Header.js';
import Events from './pages/Events.js';
import GetInvolved from './pages/Get-Involved.js';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/events" element={<Events />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

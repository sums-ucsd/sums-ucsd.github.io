import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js'; 
import './App.css';
import Board from './pages/Board.js';
import Header from './components/Header.js';
import Events from './pages/Events.js';
import GetInvolved from './pages/Get-Involved.js';
import EmilyHawksworth from './pages/profiles/EmilyHawksworth.js';
import HaileyThai from './pages/profiles/HaileyThai.js';
import HarryLonsdale from './pages/profiles/HarryLonsdale.js';
import IsaiahFang from './pages/profiles/IsaiahFang.js';
import JulieHunter from './pages/profiles/JulieHunter.js';
import MattTokunaga from './pages/profiles/MattTokunaga.js';
import MicaLi from './pages/profiles/MicaLi.js';
import MohitDutta from './pages/profiles/MohitDutta.js';
import RyanBatubara from './pages/profiles/RyanBatubara.js';
import ThomasMadden from './pages/profiles/ThomasMadden.js';

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
        <Route path="/board-members/profiles/emily-hawksworth" element={<EmilyHawksworth />} />
        <Route path="/board-members/profiles/hailey-thai" element={<HaileyThai />} />
        <Route path="/board-members/profiles/harry-lonsdale" element={<HarryLonsdale />} />
        <Route path="/board-members/profiles/isaiah-fang" element={<IsaiahFang />} />
        <Route path="/board-members/profiles/julie-hunter" element={<JulieHunter />} />
        <Route path="/board-members/profiles/matt-tokunaga" element={<MattTokunaga />} />
        <Route path="/board-members/profiles/mica-li" element={<MicaLi />} />
        <Route path="/board-members/profiles/mohit-dutta" element={<MohitDutta />} />
        <Route path="/board-members/profiles/ryan-batubara" element={<RyanBatubara />} />
        <Route path="/board-members/profiles/thomas-madden" element={<ThomasMadden />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Alumni from "./pages/Alumni";
import Gallery from "./pages/Gallery";
import WebDev from "./pages/groups/WebDev";
import BlockChain from "./pages/groups/Blockchain";
import Android from "./pages/groups/AndroidDev";
import GameDev from "./pages/groups/Gamedev";
import Yearbook from "./pages/Yearbook";
import Directory from "./pages/Directory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/groups/web-development" element={<WebDev />} />
        <Route path="/groups/android-dev" element={<Android />} />
        <Route path="/groups/blockchain-dev" element={<BlockChain />} />
        <Route path="/groups/game-dev" element={<GameDev />} />
        <Route path="/yearbook" element={<Yearbook />} />
        <Route path="/directory" element={<Directory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

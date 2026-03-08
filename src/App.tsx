import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import BoothPage from "./pages/BoothPage";
import EventPage from "./pages/EventPage";
import LinkWorldPage from "./pages/LinkWorldPage";
import StarBackground from "./components/StarBackground";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-white selection:bg-blue-50">
        <StarBackground />
        <div className="relative z-10 flex flex-col items-center">
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/booth" element={<BoothPage />} />
              <Route path="/event" element={<EventPage />} />
              <Route path="/links" element={<LinkWorldPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

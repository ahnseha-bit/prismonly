import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
              
              <Route path="/info" element={<Navigate to="/info/01" replace />} />
              <Route path="/info/:tabId" element={<InfoPage />} />
              
              <Route path="/booth" element={<Navigate to="/booth/01" replace />} />
              <Route path="/booth/:tabId" element={<BoothPage />} />
              
              <Route path="/event" element={<Navigate to="/event/01" replace />} />
              <Route path="/event/:tabId" element={<EventPage />} />
              
              <Route path="/links" element={<Navigate to="/links/01" replace />} />
              <Route path="/links/:tabId" element={<LinkWorldPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

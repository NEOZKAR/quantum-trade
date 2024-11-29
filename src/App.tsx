import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { Hero } from './components/home/hero';
import { MarketSection } from './components/home/market-section';
import { RegisterPage } from './pages/register';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <MarketSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageLoader from './pages/PageLoader';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:pageName" element={<PageLoader />} />
      </Routes>
    </Router>
  );
}

export default App;

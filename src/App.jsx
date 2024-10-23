import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Flashcards from './pages/Flashcards/Flashcards';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

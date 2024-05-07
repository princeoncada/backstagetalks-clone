import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './output.css';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<h1>About</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

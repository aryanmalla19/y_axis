import { Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import Visa from './pages/Visa';

function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/work" element={<Work/>} />
    <Route path="/visa" element={<Visa/>} />
   </Routes>
    </>
  );
}

export default App;
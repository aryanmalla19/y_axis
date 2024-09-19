import { Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Work/>} />
   </Routes>
    </>
  );
}

export default App;
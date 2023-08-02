import './App.css';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Exchange from './components/Exchange'
import Coin from './components/Coin' 
import CoinDetails from './components/CoinDetails'
import Header from './components/Header'
function App() {
  return (
  <Router>
    <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/exchange' element={<Exchange/>}/>
    <Route path='/coin' element={<Coin/>}/>
    <Route path="/coins/:id" element={<CoinDetails />} />
  </Routes>
  </Router>
  );
}

export default App;

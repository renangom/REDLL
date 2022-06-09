import {BrowserRouter as Router,Routes ,  Route ,Link} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/servicos' exact element={<Services />} />
          <Route path='/produtos' exact element={<Products />} />
          <Route path='/sign-up' exact  element={<SignUp/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

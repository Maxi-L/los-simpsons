import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar/';
import Footer from './componentes/Footer/';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Contacto from './pages/Contacto/Contacto';
import Error from './pages/Error/Error';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/los-simpsons' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/los-simpson/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;

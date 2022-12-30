import './App.css';
import Navbar from '../src/Components/Navbar.js'
import Firstpage from '../src/Components/Firstpage';
import Nextpage from './Components/Nextpage';
import Thirdpage from './Components/Thirdpage';
import Forthe from './Components/Forthe';
import Work from './Components/Work';
import Footer from './Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import{Route, Routes} from 'react-router-dom';

function App() {



  return (
    <div className="Main-Container">
      <Navbar />
      <div className='this'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
      <Firstpage />
      <Nextpage />
      <Thirdpage />
      <Forthe/>
      <Work />
      <Footer />
    </div>
  );
}

export default App;

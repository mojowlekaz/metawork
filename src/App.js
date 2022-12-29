import './App.css';
import Navbar from '../src/Components/Navbar.js'
import Firstpage from '../src/Components/Firstpage';
import Nextpage from './Components/Nextpage';
import Thirdpage from './Components/Thirdpage';
import Forthe from './Components/Forthe';
import Work from './Components/Work';
import Footer from './Footer';

function App() {
  return (
    <div className="Main-Container">
      <Navbar />
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

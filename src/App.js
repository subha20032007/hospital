
import './App.css';
import { Footer } from './componets/Footer';

import { Home } from './componets/Home';
import { Navbar } from './componets/Navbar';


function App() {
  return (
    <div className="App">
   <Navbar/>  
   <Home/>
  <Footer/>
  </div>
  );
}

export default App;

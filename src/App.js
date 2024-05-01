import './App.css';
import Navbar from './components/Navbar';
import  About  from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom';


function App() {
  
  
  return (
    <div className='App'>
      
        
        <div >
          <Navbar/>
          <Routes>
                <Route index element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>

      
    </div>
  );
}

export default App;

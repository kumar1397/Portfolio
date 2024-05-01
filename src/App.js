import './App.css';
// import Navbar from './components/Navbar';
import  About  from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'
import Home from './components/Home'
import Mainheader from './components/Mainheader';
import { Routes,Route,NavLink } from 'react-router-dom';
function App() {
  return (
    <div>
      <nav className=' text-slate-100  w-full h-12 bg-black mt-6 mt-15'>
      <ul className='flex justify-center content-center flex-row text-lg gap-11'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink> 
          {/* navlink is used as a substitute of anchor tag  and is used to get a classname active on current page*/}
        </li>
        <li>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Connect</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Mainheader/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;

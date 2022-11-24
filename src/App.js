import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header2 from './Components/Header2/Header2';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Special from './Components/Special/Special';
import Events from './Components/Events/Events';
import Chefs from './Components/Chefs/Chefs';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>

      <Header2></Header2>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/menu' element={<Menu></Menu>}></Route>
      <Route path='/special' element={<Special></Special>}></Route>
      <Route path='/events' element={<Events></Events>}></Route>
      <Route path='/chefs' element={<Chefs></Chefs>}></Route>
      <Route path='/gallery' element={<Gallery></Gallery>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;

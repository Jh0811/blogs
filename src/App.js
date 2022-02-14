

import { useSelector } from 'react-redux';
import Blogs from './components/Blogs';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { selectSignedIn } from './features/Userslice';
import './styling/app.css';
import { Button, Container, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from './theme/ThemeContext';
import ToggleDark from './components/ToggleDark';


function App() {
  
   const isSignedIn = useSelector(selectSignedIn);
   


  return (
    <div className='App'>
     
        <Navbar/>
         <HomePage/>
         {isSignedIn && <Blogs/>}
    </div>
  );
}

export default App;

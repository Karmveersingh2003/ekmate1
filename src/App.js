import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Contactus from './component/ContactUs/Contactus';
import Login from './component/Login/Login';

function App() {
  return (
   <>
    <Router>
        
      
{/*          
           <Navbar/> */}
         <Routes>
           <Route index element={<Home/>}></Route>  
           <Route path='/*' element={<h1>error page</h1>}></Route>
           <Route path='/contact' element={<Contactus/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
          
           
         </Routes>
    
       </Router>
   </>
  );
}

export default App;

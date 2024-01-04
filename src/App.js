import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer} from "./components"
import { ToastContainer, toast } from 'react-toastify';
//Pages
import { Home, Contact, AboutUs, Login, Register, Reset } from "./pages" 
//Components

import 'react-toastify/dist/ReactToastify.css';



function App() {

  
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
      <Header/>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/contact' element={ <Contact/> }/>
            <Route path='/about' element={ <AboutUs/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/register' element={ <Register/> }/>
            <Route path='/reset' element={ <Reset /> }/>
          </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

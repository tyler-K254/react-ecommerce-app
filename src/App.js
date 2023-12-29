import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import { Home, Contact, AboutUs, Login, Register, Reset } from "./pages" 
//Components
import { Header, Footer} from "./components"



function App() {

  
  return (
    <>
      <BrowserRouter>
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

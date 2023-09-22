import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from './Components/HomePage';
import About from './Components/About';
import Properties from './Components/Properties';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/about" element={<About />} /> 
      <Route exact path="/properties" element={<Properties />} /> 
      <Route exact path="/services" element={<Services />} /> 
       <Route exact path="/contact" element={<ContactUs />} />
       </Routes>
    </BrowserRouter>
  
  
    </>
  );
}

export default App;


import './App.css'
import Main from './screens/Main'
import { Routes, Route } from "react-router-dom";
import About from './screens/About';
import Contact from './screens/Contact';
import Samecniero from './screens/Samecniero';
import Saswavlo from './screens/Saswavlo';
import Terminbanki from './screens/Terminbanki';
import Gallery from './screens/Gallery';
import Team from './screens/Team';
import Partners from './screens/Partners';
import Neologizmebi from './screens/Neologizmebi';
import Ambebi from './screens/Ambebi';


function App() {
 

  return (
    <>
       
       <Routes>
         <Route path="/" element={<Main/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/samecniero" element={<Samecniero/>}/>
         <Route path="/saswavlo" element={<Saswavlo/>}/>
         <Route path="/terminbanki" element={<Terminbanki/>}/>
         <Route path="/gallery" element={<Gallery/>}/>
         <Route path="/team" element={<Team/>}/>
         <Route path="/partners" element={<Partners/>}/>
         <Route path="/neologizmebi" element={<Neologizmebi/>}/>
         <Route path="/ambebi" element={<Ambebi/>}/>
       </Routes>
  
    </>
  )
}

export default App

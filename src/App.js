
import './components/style/App.css';
import Navbar from "./components/inc/Navbar"
import {BrowserRouter as Router,Routes , Route} from "react-router-dom"
import Header from "./components/pages/Header"
import Logoslider from './components/pages/Logoslider';
import SocialMediaMarketing from "./components/pages/SocialMediaMarketing"
import Workingwith from './components/pages/Workingwith';
import SeoStretagy from './components/pages/SeoStretagy';
import DigitalCoomunication from './components/pages/DigitalCoomunication';
import DMServices from './components/pages/DMServices';
import Affordable from "./components/pages/Affordable"
import  WhyChoose from "./components/pages/WhyChoose"
import Footer from "./components/pages/Footer"
function App() {
  return (
    <div className="App">
   <Router>
     <Routes>



     </Routes>
     <Navbar/>
     <Header/>
   <Logoslider/>
   <SocialMediaMarketing/>
   {/* <Workingwith/> */}
    <SeoStretagy/>
   <DigitalCoomunication/>
   {/* <DMServices/> 
   <Affordable/>
  <WhyChoose/>
  <Footer/>  */}
  
   </Router>
   
    </div>
  );
}

export default App;

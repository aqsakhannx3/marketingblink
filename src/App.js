
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
import SMmarketing from './components/pages/SMmarketing';
import Footer from "./components/pages/Footer"
import SEO from './components/pages/SEO';
function App() {
  return (
    <div className="App">
   <Router>
     <Routes>



     </Routes>
     <Navbar/>
   <Header/>
   <Logoslider/>
 <SMmarketing/>
   <Workingwith/>
   <SeoStretagy/>
   {/* <SEO/> */}
   <DigitalCoomunication/>
   <DMServices/>
{/* <Affordable/> */}
   <WhyChoose/> 
   <Footer/>  
   </Router>
   
    </div>
  );
}

export default App;

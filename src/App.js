
// import './components/style/App.css';

import "./style/style.css"
import "./style/rotating.css"
import "./style/font-awesome/css/font-awesome.min.css"
import Navbar from "./components/inc/Navbar"
import {BrowserRouter as Router,Routes , Route} from "react-router-dom"
import Header from "./components/pages/Header"
import Logoslider from './components/pages/Logoslider';

import Workingwith from './components/pages/Workingwith';
import SeoStretagy from './components/pages/SeoStretagy';
import DigitalCoomunication from './components/pages/DigitalCoomunication';
import DMServices from './components/pages/DMServices';
import Affordable from "./components/pages/Affordable"
import  WhyChoose from "./components/pages/WhyChoose"
import SMmarketing from './components/pages/SMmarketing';
import Footer from "./components/pages/Footer"


import AOS from "aos"





function App() {
  AOS.init({once:true})

  return (
    <div className="App">






      <Router>
      <Routes>
        <Route path="/"></Route>
      </Routes>

        <Navbar/>
        <Header/>
        <Logoslider/>
      <SMmarketing/>
      <Workingwith/>
      <SeoStretagy/>
      <DigitalCoomunication/>
      <DMServices/>
      <Affordable/>
      <WhyChoose/>
      <Footer/>

      </Router>

{/* 
   <Router>

     <Routes>



     </Routes>
     <Navbar/>
    
   <Header/>
 <Logoslider/>

<SMmarketing/>
<Workingwith/>
 <SeoStretagy/>
  
 <DigitalCoomunication/>
   <DMServices/>
<Affordable/>
   <WhyChoose/>  
   <Footer/>   
   </Router>  */}
   
{/* <div class="animation-area">
        <ul class="box-area">

<li></li>
<li></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="15.525" height="13.55" viewBox="0 0 15.525 13.55">
  <path id="Shape_6_copy_6" data-name="Shape 6 copy 6" d="M90.876,273.1a8.4,8.4,0,0,1-.743,2.049,7.951,7.951,0,0,1-10.914,3.491A8.035,8.035,0,0,1,76.178,268.2a8.4,8.4,0,0,1,1.342-2,.365.365,0,0,1,.647.239A7.642,7.642,0,0,0,90.3,272.732.364.364,0,0,1,90.876,273.1Z" transform="translate(-75.361 -266.075)" fill="#081d51"/>
</svg></li>
<li></li>

<li><svg xmlns="http://www.w3.org/2000/svg" width="15.525" height="13.55" viewBox="0 0 15.525 13.55">
  <path id="Shape_6_copy_6" data-name="Shape 6 copy 6" d="M90.876,273.1a8.4,8.4,0,0,1-.743,2.049,7.951,7.951,0,0,1-10.914,3.491A8.035,8.035,0,0,1,76.178,268.2a8.4,8.4,0,0,1,1.342-2,.365.365,0,0,1,.647.239A7.642,7.642,0,0,0,90.3,272.732.364.364,0,0,1,90.876,273.1Z" transform="translate(-75.361 -266.075)" fill="#081d51"/>
</svg></li>
<li></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="15.525" height="13.55" viewBox="0 0 15.525 13.55">
  <path id="Shape_6_copy_6" data-name="Shape 6 copy 6" d="M90.876,273.1a8.4,8.4,0,0,1-.743,2.049,7.951,7.951,0,0,1-10.914,3.491A8.035,8.035,0,0,1,76.178,268.2a8.4,8.4,0,0,1,1.342-2,.365.365,0,0,1,.647.239A7.642,7.642,0,0,0,90.3,272.732.364.364,0,0,1,90.876,273.1Z" transform="translate(-75.361 -266.075)" fill="#081d51"/>
</svg></li>
<li></li>
<li></li>
<li></li>





        </ul>

       </div> */}
    </div> 
  );
}

export default App;

import React from "react";
import trustpilot from "../images/trustpilot.jpg";
import google from "../images/google.jpg";
import bark from "../images/bark.jpg";
import clutch from "../images/clutch.jpg";

const Logoslider = () => {
  return (
    <section className=" Logoslider" >
      <div className="container">
        <div className="  row justify-content-around align-items-center header-icons  ">
                
                     <div className="col">
                     <img src={trustpilot}/>
                     </div>
                 <div className="col">
                 <img src={google} />
                 </div>
                   <div className="col">
                   <img src={bark} />
                   </div>
                   <div className="col">
                   <img src={clutch}/>
                   </div>
                   
              

          {/* <ul>
            <li>
            
              <img src={trustpilot} />
            </li>
            <li><img src={google} /></li>
            <li> <img src={bark} /></li>
            <li>  <img src={clutch} /></li>
          </ul> */}

          

        
        </div>
      </div>
    </section>
  );
};

export default Logoslider;

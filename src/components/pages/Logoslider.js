import React from "react";
import trustpilot from "../images/trustpilot.jpg";
import google from "../images/google.jpg";
import bark from "../images/bark.jpg";
import clutch from "../images/clutch.jpg";

const Logoslider = () => {
  return (
    <section className=" Logoslider">
      <div className="container">
        <div className="header-icons  ">
          <ul>
            <li>
            
              <img src={trustpilot} />
            </li>
            <li><img src={google} /></li>
            <li> <img src={bark} /></li>
            <li>  <img src={clutch} /></li>
          </ul>

          

        
        </div>
      </div>
    </section>
  );
};

export default Logoslider;

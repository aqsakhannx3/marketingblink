import React from "react";

import trustpilot from "../../images/trustpilot.jpg"
import google from "../../images/google.jpg"
import bark from "../../images/bark.jpg"
import clutch from "../../images/clutch.jpg"

const Logoslider = () => {
  return (
    <section className="Logoslider" data-aos="fade-up" data-aos-duration="800">
    <div className="container">
      <ul className="row justify-content-around align-items-center header-icons  ">
        <li className="col-md-3"> <img src={trustpilot}/> </li>
        <li className="col-md-3"> <img src={google} /> </li>
        <li className="col-md-3"> <img src={bark} /> </li>
        <li className="col-md-3"> <img src={clutch}/> </li>
      </ul>
    </div>
  </section>
  );
};

export default Logoslider;

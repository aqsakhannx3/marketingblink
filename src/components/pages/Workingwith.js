import React from 'react'
import artheart1 from "../../images/art-heart-1.webp"
import artheart2 from "../../images/art-heart-2.webp"
import art2 from "../../images/art2.webp"
import heart from "../../images/heart.jpg"
import google from "../../images/google1.jpg"
import facebook from "../../images/facebook1.jpg"
import instagram from "../../images/instagram1.jpg"
import youtube from "../../images/youtube.jpg"
import pinterest from "../../images/logos/pinterest.jpg"

import tiktok from "../../images/logos/tiktok.jpg"
import panadoc from "../../images/panadoc.jpg"
import think from "../../images/logos/think.jpg"

import microsoft from "../../images/logos/microsoft.jpg"
import zendesk from "../../images/logos/zendesk.jpg"
const Workingwith = () => {
    return (



         
<section className=" workingwith" data-aos="fade-up" data-aos-duration="900">
	<div className="particles_7 gt3_rotated_element">
			  <img src={artheart1} alt="" width="50" height="50" />
	</div>
	<div className="particles_8 gt3_rotated_element">
			  <img src={artheart2} alt="" width="87" height="87" />
	</div>
	<div className="particles_6 gt3_rotated_element">
			  <img src={art2} alt="" width="41" height="53" />
	</div>
  <div className="container workingwithcontainer" >
    <div className="workingwithtext" >
      <h3>Platforms We <span><img src={heart} className=" ms-2 text-center" /></span> Working With</h3>
    </div>
    <div className="client-area">
      <section className="logo-area slider">
        <div className="slide"> <img src={google}/> </div>
        <div className="slide"> <img src={facebook}/> </div>
        <div className="slide"> <img src={instagram}/> </div>
        <div className="slide"> <img src={youtube}/> </div>
        <div className="slide"> <img src={pinterest}/> </div>
        <div className="slide"> <img src={tiktok}/> </div>
        <div className="slide"> <img src={panadoc}/> </div>
        <div className="slide"> <img src={think}/> </div>
        <div className="slide"> <img src={microsoft}/> </div>
        <div className="slide"> <img src={zendesk}/> </div>
      </section>
    </div>
  </div>
</section>













//       <div className="container-fluid workingwith">


//           <div className="container workingwithcontainer " >
//                    <div className="row workingwithtext">
//                    <div className="col-md-12  text-center">

// <h3 className="text-center">  Platforms We 

// <span><img src={heart} className=" ms-2 text-center" /></span>  Working With</h3>
// </div>


// <div className="row   align-items-center    workingwithicons ">
//     <div className="col text-end" >
//         <img src={google} />
//     </div>
//     <div className="col text-end " >
//         <img src={fb} />
//     </div>
//     <div className="col text-end " >
//         <img src={instagram} />
//     </div>
//     <div className="col text-end ">
//         <img src={youtube} />
//     </div>
//     <div className="col text-end ">
//         <img src={pinterest} />
//     </div>
// </div>
//                    </div>

//           </div>
//       </div>
    )
}

export default Workingwith;
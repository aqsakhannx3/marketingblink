import React from 'react'
import google from "../images/google1.jpg"
import fb from "../images/facebook1.jpg"
import instagram from "../images/instagram1.jpg"
import pinterest from "../images/pinterest1.jpg"
import youtube from "../images/youtube1.jpg"
import heart from "../images/heart.jpg"
import tiktok from "../images/tiktok.jpg"
import panadoc from "../images/panadoc.jpg"
import think from "../images/think.jpg"
import zendesk from "../images/zendesk.jpg"
import microsoft from "../images/microsoft.jpg"
import typeform from "../images/typeform.jpg"
import Slider from "react-slick";
const Workingwith = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
      };
    return (
      <div className="container-fluid workingwith">


          <div className="container workingwithcontainer " >
                   <div className="row workingwithtext">
                   <div className="col-md-12  text-center">

<h3 className="text-center">  Platforms We 

<span><img src={heart} className=" ms-2 text-center" /></span>  Working With</h3>
</div>


<div className="row   align-items-center    workingwithicons " style={{backgroundColor:"green"}}>
    <div className="col text-end" >
        <img src={google} />
    </div>
    <div className="col text-end " >
        <img src={fb} />
    </div>
    <div className="col text-end " >
        <img src={instagram} />
    </div>
    <div className="col text-end ">
        <img src={youtube} />
    </div>
    <div className="col text-end ">
        <img src={pinterest} />
    </div>
</div>



 {/* <div className='row align-items-center  ' style={{backgroundColor:"pink"}}>
       
        <Slider {...settings}>
          <div className="col ">
          <img src={google} />
          </div>
          <div className="col ">
          <img src={instagram} />
          </div>
          <div className="col ">
          <img src={fb} />
          </div>
          <div className="col "> 
          <img src={youtube} />
          </div>
          <div className="col ">
          <img src={pinterest} />
          </div>
          <div className="col ">
          <img src={tiktok} />
          </div>
          <div className="col ">
          <img src={panadoc} />
          </div>
          <div className="col ">
          <img src={think} />
          </div>
          
          <div className="col ">
          <img src={typeform} />
          </div>
        </Slider>
      </div> */}
                   </div>

          </div>
      </div>
    )
}

export default Workingwith

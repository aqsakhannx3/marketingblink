import React from 'react'
import google from "../images/google1.jpg"
import fb from "../images/facebook1.jpg"
import instagram from "../images/instagram1.jpg"
import pinterest from "../images/pinterest1.jpg"
import youtube from "../images/youtube1.jpg"
import heart from "../images/heart.jpg"
const Workingwith = () => {
    return (
      <div className="container-fluid workingwith">


          <div className="container workingwithcontainer " >
                   <div className="row workingwithtext">
                   <div className="col-md-12  text-center">

<h3 className="text-center">  Platforms We 

<span><img src={heart} className=" ms-2 text-center" /></span>  Working With</h3>
</div>


<div className="row   align-items-center    workingwithicons " style={{backgroundColor:"pink"}}>
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
                   </div>

          </div>
      </div>
    )
}

export default Workingwith

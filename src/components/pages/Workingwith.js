import React from 'react'
import google from "../images/google1.jpg"
import fb from "../images/facebook1.jpg"
import instagram from "../images/instagram1.jpg"
import pinterest from "../images/pinterest1.jpg"
import youtube from "../images/youtube.jpg"
import heart from "../images/heart.jpg"
import tiktok from "../images/tiktok.jpg"
import panadoc from "../images/panadoc.jpg"
import think from "../images/think.jpg"
import zendesk from "../images/zendesk.jpg"
import microsoft from "../images/microsoft.jpg"
import typeform from "../images/typeform1.jpg"

import "../style/slick.css"
const Workingwith = () => {
    return (



            <div className="container-fluid workingwith">



                <div className='container workingwithcontainer'>

                  <div className='workingwithtext' >

                  <h3>Platforms We  <span><img src={heart} className=" ms-2 text-center" /></span> Working With</h3>
                  </div>



                  <div className='logo-slider'>


                  <div class="item">
            <a href="#">
                <img src={google}/>
            </a>
        </div>


        <div class="item">
            <a href="#">
                <img src={fb}/>
            </a>
        </div>
        <div class="item">
            <a href="#">
                <img src={instagram}/>
            </a>
        </div>

        <div class="item">
            <a href="#">
                <img src={pinterest}/>
            </a>
        </div>

        <div class="item">
            <a href="#">
                <img src={youtube}/>
            </a>
        </div>

        <div class="item">
            <a href="#">
                <img src={tiktok}/>
            </a>
        </div>

        <div class="item">
            <a href="#">
                <img src={panadoc}/>
            </a>
        </div>
        <div class="item ">
            <a href="#" >
                <img src={think} />
            </a>
        </div>
        
        <div class="item">
            <a href="#">
                <img src={typeform}/>
            </a>
        </div>
        <div class="item">
            <a href="#">
                <img src={microsoft}/>
            </a>
        </div>
        <div class="item">
            <a href="#">
                <img src={zendesk}/>
            </a>
        </div>
                  </div>
                </div>
            </div>













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

export default Workingwith

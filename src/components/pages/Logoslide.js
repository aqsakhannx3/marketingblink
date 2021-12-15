import React from 'react'
import img1 from "../images/facebook1.jpg"
import img2 from "../images/google1.jpg"
import img3 from "../images/instagram1.jpg"
import img4 from "../images/youtube.jpg"
import img5 from "../images/pinterest1.jpg"
import img6 from "../images/tiktok.jpg"
import img7 from "../images/panadoc.jpg"

import img8 from "../images/think.jpg"

import img9 from "../images/microsoft.jpg"

import "../style/logoslide.css"


import img10 from "../images/zendesk.jpg"



const Logoslide = () => {
    return (
     <>
<div className='client-area workingwith'>

<div className='container'>


<section class="logo-area slider">
                <div class="slide">
                    <img src={img1}/>
                </div>
                <div class="slide">
                <img src={img2}/>
                </div>
                <div class="slide">
                <img src={img3}/>
                </div>
                <div class="slide">
                <img src={img4}/>
                </div>
                <div class="slide">
                <img src={img5}/>
                </div>
                <div class="slide">
                <img src={img6}/>
                </div>
                <div class="slide">
                <img src={img7}/>
                </div>
                <div class="slide">
                <img src={img8}/>
                </div>
                <div class="slide">
                <img src={img9}/>
                </div>
                <div class="slide">
                    
                    <img src={img10}/> 
                   
                </div>
            </section>
</div>
</div>





     </>
    )
}

export default Logoslide

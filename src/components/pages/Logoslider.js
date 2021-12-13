import React from 'react'
import trustpilot from "../images/trustpilot.jpg"
import google from "../images/google.jpg"
import bark from "../images/bark.jpg"
import clutch from "../images/clutch.jpg"
const Logoslider = () => {
    return (
       <div className="container-fluid" >

           <div className="container"  >

           <div className="row align-items-center  header-icons">

<div className="col  " >
    <img src={trustpilot} />

</div>
<div className="col text-end " >
    <img src={google} />
</div>
<div className="col text-end  " >
    <img src={bark} />
</div>
<div className="col text-end " >
    <img src={clutch} />
</div>
</div>
           </div>
       </div>
    )
}

export default Logoslider

import React from 'react'
import digitalcommimg from "../images/digitalcommimg.png"
const DigitalCoomunication = () => {
    return (
       <div className="container-fluid DigitalCoomunication">
          
            <div className="container" >

<div className="row "  >

    <div className="col-md-6 DCleft" >
        <div className="DCleftcontent">
        <h3>Unlock the Power of 
            
            
             Digital Communication</h3>
        <p>
        Effective and engaging communication with your customer is the key to successful outcomes, but more than that, the success of a business in this digital era depends on the effectiveness of a digital marketing strategy. With the right digital marketing agency by your side, you can achieve your marketing goals in less time than you might have imagined and start reaping the benefits of your hard work quicker than you think.

        </p>
        <button type="button" className="btn" >Request Digital Marketing Plan</button> 
        </div>

      
        



    </div>
    <div className="col-md-6 socialmediaright" >



     
<div className='socialmediarightimg'>

<img src={digitalcommimg} style={{width:"100%"}}/>
</div>
       
        
    </div>
</div>

 
</div>
       
       </div>
    )
}

export default DigitalCoomunication

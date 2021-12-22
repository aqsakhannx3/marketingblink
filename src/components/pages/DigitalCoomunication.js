import React from 'react'
import art3 from "../../images/art3.webp"
import art2 from "../../images/art2.webp"
import dcimg from "../../images/digitalcommimg.png"

const DigitalCoomunication = () => {
    return (
        <section className="DigitalCoomunication">
       
        <div className="particles_10 gt3_rotated_element">
                  <img src={art3} alt="" width="41" height="53"/>
        </div>
      <div className="container" >
          
        <div className="row "  >
          <div className="col-md-6 DCleft" >
            <div className="DCleftcontent">
              <h3>Unlock the Power of 
                
                
                Digital Communication</h3>
              <p> Effective and engaging communication with your customer is the key to successful outcomes, but more than that, the success of a business in this digital era depends on the effectiveness of a digital marketing strategy. With the right digital marketing agency by your side, you can achieve your marketing goals in less time than you might have imagined and start reaping the benefits of your hard work quicker than you think. </p>
              <button type="button" className="btn" >Request Digital Marketing Plan</button>
            </div>
          </div>
          <div className="col-md-6 socialmediaright" data-aos="fade-left" data-aos-duration="800">
              <div className="particles_11 gt3_rotated_element">
                  <img src={art2} alt="" width="41" height="53"/>
              </div>
            <div className="socialmediarightimg"> <img src={dcimg} style={{width:"100%"}}/> </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default DigitalCoomunication

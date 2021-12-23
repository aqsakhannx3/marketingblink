import React from "react"
import art3 from  "../../images/art3.webp"
import herobubble1 from "../../images/hero-buble1.webp"
import art1 from "../../images/art1.webp"
import art2 from "../../images/art2.webp"
import herogirl from "../../images/hero-girl.webp"

const Header = () => {
    return (
      <section class="Header">
      <div class="particles_3 gt3_rotated_element">
            <img src={art3} alt="" width="41" height="53" />
          </div>
      <div class="container">
        <div class="row">
          <div class=" col-md-6 hero-v1">
          <img  class="hero-bubble" src={herobubble1} width="128" data-aos="fade-left" data-aos-duration="700"/>
            <div class="headerimg" data-aos="fade-up" data-aos-duration="900"> <img src={herogirl}  /> </div>
          </div>
          <div class="col-md-6  hero">
          <div class="particles_1 gt3_rotated_element">
            <img src={art1} alt="" width="41" height="53" />
          </div>
          <div class="particles_2 gt3_rotated_element">
            <img src={art2} alt="" width="41" height="53" />
          </div>
          
          
            <div class=" col-md-10">
              <h1> Digital <br/>
                Marketing
                
                Services</h1>
              <p> Your mere social media presence isn’t all it takes to
                up your social media game. Your Social Media
                footprint. Reach new heights with digital marketing
                services by <span class="marketingblink">Marketing Blink</span> </p>
            </div>
            <div class="row HeaderInput">
          <span class="shadow-bottom"></span>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Full Name" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Phone" />
              </div>
              <div class="col-md-6" >
                <select class="form-control select">
            <option value="volvo">Social Media</option>
            <option value="saab">Facebook</option>
            <option value="mercedes">Instagram</option>
            <option value="audi">Twitter</option>
          </select>
              </div>
              <div class="col-md-6">
                <input type="button" class="form-control  btnrequest " value="REQUEST A CALL BACK" />
              </div>
              <div class="col-md-6 vc">
                <input type="button" class="form-control  btnlive " value="LIVE CHAT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    )
}

export default Header
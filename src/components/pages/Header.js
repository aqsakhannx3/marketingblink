import React from "react"
import art3 from  "../../images/art3.webp"
import herobubble1 from "../../images/hero-buble1.webp"
import art1 from "../../images/art1.webp"
import art2 from "../../images/art2.webp"
import herogirl from "../../images/hero-girl.webp"

const Header = () => {
    return (
      <section className="Header">
      <div className="particles_3 gt3_rotated_element">
            <img src={art3} alt="" width="41" height="53" />
          </div>
      <div className="container">
        <div className="row">
          <div className=" col-md-6 hero-v1">
          <img  className="hero-bubble" src={herobubble1} width="128" data-aos="fade-left" data-aos-duration="700"/>
            <div className="headerimg" data-aos="fade-up" data-aos-duration="900"> <img src={herogirl}  /> </div>
          </div>
          <div className="col-md-6  hero">
          <div className="particles_1 gt3_rotated_element">
            <img src={art1} alt="" width="41" height="53" />
          </div>
          <div className="particles_2 gt3_rotated_element">
            <img src={art2} alt="" width="41" height="53" />
          </div>
          
          
            <div className=" col-md-10">
              <h1> Digital <br/>
                Marketing
                
                Services</h1>
              <p> Your mere social media presence isn’t all it takes to
                up your social media game. Your Social Media
                footprint. Reach new heights with digital marketing
                services by <span className="marketingblink">Marketing Blink</span> </p>
            </div>
            <div className="row HeaderInput">
          <span className="shadow-bottom"></span>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <div className="col-md-6" >
                <select className="form-control select">
            <option value="volvo">Social Media</option>
            <option value="saab">Facebook</option>
            <option value="mercedes">Instagram</option>
            <option value="audi">Twitter</option>
          </select>
              </div>
              <div className="col-md-6">
                <input type="button" className="form-control  btnrequest " value="REQUEST A CALL BACK" />
              </div>
              <div className="col-md-6 vc">
                <input type="button" className="form-control  btnlive " value="LIVE CHAT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    )
}

export default Header
import React from 'react'
import icon1 from "../../images/smm-icon-x1.png"
import icon2 from "../../images/seo-icon-x1.png"
import man from "../../images/sitting-man.webp"
import icon3 from "../../images/ads-icon-x1.png"
import icon4 from "../../images/cm-icon-x1.png"

const DMServices = () => {
    return (


<div className="DMServicessection">
	<div className="DMServicespatteren-1" data-aos="fade-up" data-aos-duration="800"></div>
	<div className="DMServicespatteren-2" data-aos="fade-up" data-aos-duration="800"></div>
<div className="container">
	
	
  <div className="row  DMServicescontent">
    <h2  >Our Digital <br/>
      Marketing Services </h2>
    <h4>Now let’s talk business.</h4>
    <p>As a holistic internet marketing company, we offer a wide range of digital marketing solutions to help you achieve
      your marketing goals. From taking care of your digital presence, running successful Google campaigns, offering best SEO services to amping your current content marketing, we do it all and more. </p>
  </div>
  <div className="row">
    <div className="col-md-3 col-sm-6">
      <div className="section1">
          <div className="DMSMM">
			  <div className="desktop-hide dm-icons">
			  	<img alt="" src={icon1} />
			  </div>
              <h4  >Social Media Marketing</h4>
              <p>We develop a holistic social media
                plan for your business across all
                social platforms and make your
                voice heard in the digital crowd.</p>
          </div>
          <div className="DMSEO" >
			  <div className="desktop-hide dm-icons">
			  	<img alt="" src={icon2} />
			  </div>
			  
              <h4  >SEO Services</h4>
              <p>Better SEO means you have to
                spend less on SEM. This is the
                SEO philosophy embedded in
                our efforts.</p>
          </div>
</div>
    </div>
	  
	<div className="col-md-6 text-center sitting-man" data-aos="fade-up" data-aos-duration="800">
		<img alt="" src={man} />
	</div>
	  
    <div className="col-md-3 col-sm-6">
      <div className="section2">
          <div className="DMGPA">
			  <div className="desktop-hide dm-icons">
			  	<img alt="" src={icon3} />
			  </div>
              <h4  >Google Paid Ads</h4>
              <p>We are Google ads certified and have
                the expertise to run successful paid advertising campaigns on Google to bring your target results.</p>
          </div>
          <div className="DMCM" >
			  <div className="desktop-hide dm-icons">
			  	<img alt="" src={icon4} />
			  </div>
              <h4  >Content Marketing</h4>
              <p>We provide content that is
                strictly based on user intent. As
                part of content marketing strategy our team writes, edits, develops and promotes content that is search engine friendly.</p>
            </div>

      </div>
    </div>
  </div>
	
	<div className="row mt-5">
		<div className="container">
			<div className="d-flex affordablebtn align-items-center justify-content-center">
			  <button type="button" className="btn btn-blinked  me-3 ">Get Blinked</button>
			  <button type="button" className="btn btnplans ">View Plans</button>
			</div>
		</div>
	</div>
	
	
</div>
</div>

    )
}

export default DMServices

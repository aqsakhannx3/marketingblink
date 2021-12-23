import React from 'react'
import logo from "../../images/logo-marketingblink-x2.png"
import cards from "../../images/payment-cards.png"
import googlepartner from "../../images/googlepartner.jpg"
import dmimage from "../../images/dmimage.jpg"
import chat from "../../images/chaticon.png"
import { Link } from "react-router-dom"


const Footer = () => {
    return (

<section className="Footer">
	<div className="footerupper">
		<div className="container">
			 <div className="row"  >
			  <div className="col-md-4 col-sm-4 mb-foot-logo"> <img src={logo} width="350"  /> </div>
			  <div className="col-md-4 col-sm-4 Contactdetails">
				<div className="d-flex">
				  <ul >
					<li>CONTACT DETAILS</li>
					<li><Link to="/">+1-646-880-3043</Link></li>
					<li><Link to="/">Email Us</Link></li>
					<li><Link to="/">222 Broadway, 19th Flr, <br/>
					  New York, NY 10038</Link></li>
				  </ul>
				</div>
			  </div>
			  <div className="col-md-4 col-sm-4 spcial-wrap">
				<div className="justify-content-around" >
				  <div className="mb-3">
				  	<ul className="footer-social">
                      <li><Link to="/" className="facebook"><i className="fa fa-facebook"></i></Link></li>
					  <li><Link to="/" className="google-plus"><i className="fa fa-google-plus"></i></Link></li>
                      <li><Link to="/" className="twitter"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link to="/" className="instagram"><i className="fa fa-instagram"></i></Link></li>
                    </ul>
					  
					 <div className="payment-cards">
					 	<img src={cards} alt="Accepted secure forms of payment are Mastercard, American Express, Visa, Google Pay, Apple Pay, Diners Club International, JCB and Discover." width="210"  />
					 </div> 
				  </div>
				</div>
			  </div>
			</div>
		</div>
	</div>
	
  <div className="container">
    <div className="row gx-5 footerlinks ">
      <div className="col">
        <p>SEO Services</p>
        <div> <Link to="/">SEO Packages</Link> </div>
        <div> <Link to="/">Link Building Services</Link> </div>
        <div> <Link to="/">Small Business SEO</Link> </div>
        <div> <Link to="/" >Local SEO</Link> </div>
        <div> <Link to="/">eCommerce SEO</Link> </div>
        <div> <Link to="/">Website SEO</Link> </div>
        <div> <Link to="/">Enterprise SEO</Link> </div>
        <div> <Link to="/">Nationwide SEO</Link> </div>
        <div> <Link to="/">International SEO</Link> </div>
        <div> <Link to="/">Outsourcing SEO Services</Link> </div>
        <div> <Link to="/">White Label SEO Services</Link> </div>
        <div> <Link to="/">Guaranteed SEO Services</Link> </div>
        <div> <Link to="/">SEO Keywords Research</Link> </div>
        <div> <Link to="/">SEO Competitor Analysis</Link> </div>
        <div> <Link to="/">SEO Audit & Assessment</Link> </div>
        <div> <Link to="/">Backlink Audit</Link> </div>
        <div> <Link to="/">Digital Marketing</Link> </div>
        <div> <Link to="/">SEGMB Optimization</Link> </div>
        <div> <Link to="/">Citation Building</Link> </div>
      </div>
      <div className="col" >
        <p>PPC SERVICES </p>
        <div> <Link to="/">PPC Audit</Link> </div>
        <div> <Link to="/">PPC Audits</Link> </div>
        <div> <Link to="/">Campaign optimization</Link> </div>
        <div> <Link to="/" >AdWords PPC Account Setup</Link> </div>
        <div> <Link to="/"> Ad copies development</Link> </div>
        <div> <Link to="/">Lead Generation</Link> </div>
        <div> <Link to="/"> Paid Advertising</Link> </div>
        <div> <Link to="/"> Facebook Advertising</Link> </div>
        <div> <Link to="/"> Instagram Marketing</Link> </div>
        <div> <Link to="/">YouTube Advertising</Link> </div>
        <div> <Link to="/"> LinkedIn Marketing</Link> </div>
        <div> <Link to="/"></Link> </div>
        <div> <Link to="/">Twitter Marketing</Link> </div>
        <div> <Link to="/"> Pinterest Marketing</Link> </div>
        <div> <Link to="/">Yelp Marketing</Link> </div>
        <div> <Link to="/"> Amazon Marketing</Link> </div>
        <div> <Link to="/">Digital Marketing</Link> </div>
        <div> <Link to="/">eBay Marketing</Link> </div>
      </div>
      <div className="col" >
        <p>CONTENT MARKETING</p>
        <div> <Link to="/">Product Descriptions </Link> </div>
        <div> <Link to="/">Service Pages</Link> </div>
        <div> <Link to="/">Campaign optimization</Link> </div>
        <div> <Link to="/" > Regional Pages</Link> </div>
        <div> <Link to="/"> Web Copy Writing</Link> </div>
        <div> <Link to="/"> Blog Writing</Link> </div>
        <div> <Link to="/"> Guest Blogging</Link> </div>
        <div> <Link to="/"> Email Marketing</Link> </div>
        <div> <Link to="/"> Business Plan</Link> </div>
        <div> <Link to="/"> Article Writing</Link> </div>
        <div> <Link to="/"> Infographic Design</Link> </div>
        <div> <Link to="/">Video</Link> </div>
        <p style={{marginTop:"30px"}}>SOCIAL MEDIA SERVICES</p>
        <div> <Link to="/">Influencer Marketing</Link> </div>
        <div> <Link to="/"> Community Management</Link> </div>
        <p style={{marginTop:"30px"}}>REPUTATION MANAGEMENT </p>
        <div> <Link to="/">Personal Reputation</Link> </div>
        <div> <Link to="/"> Business Reputation</Link> </div>
      </div>
      <div className="col" >
        <p>DESIGN & DEVELOPMENT </p>
        <div> <Link to="/">Web Design Packages </Link> </div>
        <div> <Link to="/">B2B Web Design</Link> </div>
        <div> <Link to="/">B2C Web Design</Link> </div>
        <div> <Link to="/" > Ecommerce Web Design</Link> </div>
        <div> <Link to="/"> WordPress Web Design</Link> </div>
        <div> <Link to="/"> Shopify Web Design</Link> </div>
        <div> <Link to="/"> Responsive Web Design</Link> </div>
        <div> <Link to="/"> Landing Pages Design</Link> </div>
        <div> <Link to="/"> Custom Logo Design</Link> </div>
        <div> <Link to="/"> Website Maintenance</Link> </div>
        <div> <Link to="/"> Website Hosting</Link> </div>
        <p style={{marginTop:"30px"}}>INDUSTRIES</p>
        <div> <Link to="/">Chiropractors</Link> </div>
        <div> <Link to="/"> Dentist</Link> </div>
        <div> <Link to="/"> Doctors</Link> </div>
        <div> <Link to="/"> Healthcare</Link> </div>
        <div> <Link to="/"> Hotels</Link> </div>
        <div> <Link to="/"> Lawyers</Link> </div>
        <div> <Link to="/"> Real Estate</Link> </div>
        <div> <Link to="/"> Restaurants</Link> </div>
        <div> <Link to="/"> Roofers</Link> </div>
        <div> <Link to="/"> Travel/Tourism</Link> </div>
      </div>
      <div className="col" >
        <p>MARKETING BLINK </p>
        <div> <Link to="/">About </Link> </div>
        <div> <Link to="/">Blog</Link> </div>
        <div> <Link to="/">Client Login</Link> </div>
        <div> <Link to="/" > Contact Us</Link> </div>
        <div> <img /> </div>
        <p>LOCATIONS</p>
        <div> <Link to="/">New York </Link> </div>
        <div> <Link to="/"> Seattle</Link> </div>
        <div> <Link to="/"> Orlando</Link> </div>
        <div> <Link to="/"> San Diego</Link> </div>
        <div> <Link to="/"> Washington DC</Link> </div>
        <div className="footerimg " style={{marginTop:"52px"}}>
          <div > <img src={googlepartner}/> </div>
          <div style={{marginTop:"30px"}} > <img src={dmimage} /> </div>
        </div>
      </div>
    </div>
    <div className="row mt-3"  >
      <div className="col-md-12 text-end footerbtn">
        <button className="btn">50% off* on your new order<img className="ms-2" src={chat} /></button>
      </div>
    </div>
    <div className="row footerend">
      <div className="col-md-12 text-center copyright"  style={{marginTop:"32px"}}>
        <p>Copyright © 2021 Marketing Blink. All rights reserved. <Link to="/">Privacy Policy</Link> and <Link to="/">Conditions of Use</Link></p>
      </div>
    </div>
  </div>
	
	{/* <!-- bubbles animation --> */}
	<div className="bubbles_wrap">
	  <div className="bubble x1"></div>
	  <div className="bubble x2"></div>
	  <div className="bubble x3"></div>
	  <div className="bubble x4"></div>
	  <div className="bubble x5"></div>
	  <div className="bubble x6"></div>
	  <div className="bubble x7"></div>
	  <div className="bubble x8"></div>
	  <div className="bubble x9"></div>
	  <div className="bubble x10"></div>
	  <div className="bubble x11"></div>
	</div>
	
</section>
    )
}

export default Footer

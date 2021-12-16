import React from 'react'
import marketingblink from "../images/marketingblink.png"
import fb from "../images/fbicon.jpg"
import googleicon from "../images/googleicon.jpg"
import twittericon from "../images/twittericon.jpg"
import instagramicon from "../images/instagramicon.jpg"
import visa from "../images/visa.jpg"
import mastercard from "../images/mastercard.jpg"
import footerimg3 from "../images/footerimg3.jpg"
import footerimg4 from "../images/footerimg4.jpg"
import footerimg5 from "../images/footerimg5.jpg"
import footerimg6 from "../images/footerimg6.jpg"

import footerimg7 from "../images/footerimg7.jpg"
import footerimg8 from "../images/footerimg8.jpg"
import googlepartner from "../images/googlepartner.jpg"
import dmimage from "../images/dmimage.jpg"
import chaticon from "../images/chaticon.png"

import { Link } from "react-router-dom"


const Footer = () => {
    return (

        <section className=" Footer">
        <div className="container ">

            <div className="row align-items-center footerrow1"  >


                <div className="col-md-4 Footerleft " >

               


                  <img src={marketingblink} className='w-100 h-100'  />


                

                 
                </div>
                

                
                <div className="col-md-4 Footermiddle">

                                      
 <div className='d-flex align-items-center'>



 <div class="vr" style={{height:"160px", borderLeft:"1px solid #F8F8F8",width:"2.41px"}}></div>
                    <ul >

                        <li>CONTACT DETAILS</li>
                        <li>+1-646-880-3043</li>
                        <li>Email Us</li>
                        <li>222 Broadway, 19th Flr,
                            <br/>
                            New York, NY 10038</li>
                    </ul>
 </div>
                   




                </div>
                <div className="col-md-4 footericons">

                    <div className="d-flex  align-items-center justify-content-around" >
                    <div class="vr" style={{height:"160px", borderLeft:"1px solid #F8F8F8",width:"2.41px"}}></div>

                    <div className='d-flex flex-column'>


                        <div className='d-flex mb-3'>

                        <img src={fb} className="me-2" />
<img src={googleicon} className="me-2" />
<img src={twittericon} className="me-2" />
<img src={instagramicon} className="me-2" />
                        </div>


                        <div className='d-flex mb-3'>

<img src={visa} className="me-2" />
<img src={mastercard} className="me-2" />
<img src={footerimg3} className="me-2" />
<img src={footerimg4} className="me-2" />
</div>


<div className='d-flex'>

<img src={footerimg5} className="me-2" />
<img src={footerimg6} className="me-2" />
<img src={footerimg7} className="me-2" />
<img src={footerimg8} className="me-2" />
</div>


</div>





                        
                        <div>


</div>
                    
                    <div>


                    </div>
                    
                    
                    </div>


                   
                    
                    



                    {/* <div className="mt-2 d-flex">

                        <img src={footericon5} className="me-2" />
                        <img src={footericon6} className="me-2" />

                        <img src={footericon7} className="me-2" />

                        <img src={footericon8} className="me-2" />


                    </div> */}
                </div>
            </div>

            <div className="row gx-5 footerlinks ">

                <div className="col">

                    <p>SEO Services</p>
                    <div>
                        <Link to="/">SEO Packages</Link>
                    </div>
                    <div>
                        <Link to="/">Link Building Services</Link>
                    </div>
                    <div>
                        <Link to="/">Small Business SEO</Link>
                    </div>
                    <div>
                        <Link to="/" >Local SEO</Link>
                    </div>
                    <div>
                        <Link to="/">eCommerce SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Website SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Enterprise SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Nationwide SEO</Link>
                    </div>
                    <div>
                        <Link to="/">International SEO</Link>
                    </div>
                    <div>
                        <Link to="/">Outsourcing SEO Services</Link>
                    </div>



                    <div>
                        <Link to="/">White Label SEO Services</Link>
                    </div>
                    <div>
                        <Link to="/">Guaranteed SEO Services</Link>
                    </div>
                    <div>
                        <Link to="/">SEO Keywords Research</Link>
                    </div>
                    <div>
                        <Link to="/">SEO Competitor Analysis</Link>
                    </div>
                    <div>
                        <Link to="/">SEO Audit & Assessment</Link>

                    </div>
                    <div>
                        <Link to="/">Backlink Audit</Link>
                    </div>
                    <div>
                        <Link to="/">Digital Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">SEGMB Optimization</Link>
                    </div>
                    <div>
                        <Link to="/">Citation Building</Link>

                    </div>
                </div>

                {/* col2 */}
                <div className="col" >

                    <p>PPC SERVICES
                    </p>
                    <div>
                        <Link to="/">PPC Audit</Link>
                    </div>
                    <div>
                        <Link to="/">PPC Audits</Link>
                    </div>
                    <div>
                        <Link to="/">Campaign optimization</Link>
                    </div>
                    <div>
                        <Link to="/" >AdWords PPC Account Setup</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Ad copies development</Link>
                    </div>
                    <div>
                        <Link to="/">Lead Generation</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Paid Advertising</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Facebook Advertising</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Instagram Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">YouTube Advertising</Link>
                    </div>



                    <div>
                        <Link to="/">
                            LinkedIn Marketing</Link>
                    </div>
                    <div>
                        <Link to="/"></Link>
                    </div>
                    <div>
                        <Link to="/">Twitter Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Pinterest Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">Yelp Marketing</Link>

                    </div>
                    <div>
                        <Link to="/">
                            Amazon Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">Digital Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">eBay Marketing</Link>
                    </div>

                </div>
                {/* col2end */}


                {/* col3 */}
                <div className="col" >

                    <p>CONTENT MARKETING</p>
                    <div>
                        <Link to="/">Product Descriptions
                        </Link>
                    </div>
                    <div>
                        <Link to="/">Service Pages</Link>
                    </div>
                    <div>
                        <Link to="/">Campaign optimization</Link>
                    </div>
                    <div>
                        <Link to="/" >
                            Regional Pages</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Web Copy Writing</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Blog Writing</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Guest Blogging</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Email Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Business Plan</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Article Writing</Link>
                    </div>



                    <div>
                        <Link to="/">

                            Infographic Design</Link>
                    </div>
                    <div>
                        <Link to="/">Video</Link>
                    </div>

                    <p style={{ marginTop: "30px" }}>SOCIAL MEDIA SERVICES</p>
                    <div>
                        <Link to="/">Influencer Marketing</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Community Management</Link>
                    </div>
                    <p style={{ marginTop: "30px" }}>REPUTATION MANAGEMENT
                    </p>
                    <div>
                        <Link to="/">Personal Reputation</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Business Reputation</Link>
                    </div>


                </div>
                {/* col3end */}

                {/* col4 */}
                <div className="col" >

                    <p>DESIGN & DEVELOPMENT
                    </p>
                    <div>
                        <Link to="/">Web Design Packages
                        </Link>
                    </div>
                    <div>
                        <Link to="/">B2B Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">B2C Web Design</Link>
                    </div>
                    <div>
                        <Link to="/" >
                            Ecommerce Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">
                            WordPress Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Shopify Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Responsive Web Design</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Landing Pages Design</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Custom Logo Design</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Website Maintenance</Link>
                    </div>



                    <div>
                        <Link to="/">

                            Website Hosting</Link>
                    </div>


                    <p style={{ marginTop: "30px" }}>INDUSTRIES</p>
                    <div>
                        <Link to="/">Chiropractors</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Dentist</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Doctors</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Healthcare</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Hotels</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Lawyers</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Real Estate</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Restaurants</Link>
                    </div>

                    <div>
                        <Link to="/">


                            Roofers</Link>
                    </div>
                    <div>
                        <Link to="/">


                            Travel/Tourism</Link>
                    </div>




                </div>
                {/* col4end */}

                {/* col5 */}
                <div className="col" >

                    <p>MARKETING BLINK
                    </p>
                    <div>
                        <Link to="/">About
                        </Link>
                    </div>
                    <div>
                        <Link to="/">Blog</Link>
                    </div>
                    <div>
                        <Link to="/">Client Login</Link>
                    </div>
                    <div>
                        <Link to="/" >
                            Contact Us</Link>
                    </div>
                    <div>
                        <img />
                    </div>










                    <p>LOCATIONS</p>
                    <div>
                        <Link to="/">New York
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            Seattle</Link>
                    </div>
                    <div>
                        <Link to="/">
                            Orlando</Link>
                    </div>
                    <div>
                        <Link to="/">
                            San Diego</Link>
                    </div>
                    <div>
                        <Link to="/">

                            Washington DC</Link>
                    </div>

<div className='footerimg ' style={{ marginTop: "52px" }}>

    
<div >
                        <img src={googlepartner} />
                    </div>
                    <div style={{ marginTop: "30px" }} >
                        <img src={dmimage} />
                    </div>

</div>





                </div>
                {/* col5end */}
            </div>
            <div className="row mt-3"  >
                <div className="col-md-12 text-end footerbtn">

                    <button className="btn" style={{ width: "287px", borderRadius: "21.27px" }}>50% off* on your new order<img className="ms-2" src={chaticon} /></button>
                </div>
            </div>
            <div className="row footerend">
                <div className="col-md-12 text-center" style={{ marginTop: "32px" }}>

                    <p>hello Copyright © 2021 Marketing Blink. All rights reserved. Privacy Policy and Conditions of Use</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Footer

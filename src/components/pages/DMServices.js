import React from 'react'
import DMSicon1 from "../images/DMSicon1.png"
import DMSicon3 from "../images/DMSicon3.png"
import DMSicon2 from "../images/DMSicon2.png"
import DMSicon4 from "../images/DMSicon4.png"
import "../style/dmsresponsive.css"


const DMServices = () => {
    return (


<div className='container DMServicessection'>
<div className="DMSimg">
                 
                  <svg className="dmsback1" xmlns="http://www.w3.org/2000/svg" width="644.543" height="306.665" viewBox="0 0 644.543 306.665">
  <path id="Shape_14_copy_4" data-name="Shape 14 copy 4" d="M-196.445,3609.691q-41.939-43.479-41.937-108.66,0-65.216,41.937-109.268T-93.423,3347.7q59.9,0,101.822,43.464,41.961,44.665,41.94,109.867,0,65.2-41.94,109.258-41.917,44.082-101.822,44.076Q-154.527,3654.365-196.445,3609.691Zm444.767,44.569c-79.024-2.907-143.98-68.892-146.378-148.551a153.543,153.543,0,0,1,5.338-45.1,7.2,7.2,0,0,1,13.367-1.616c25.853,47.459,75.853,79.655,133.37,79.655s107.494-32.182,133.35-79.627c3.111-5.706,11.565-5.027,13.289,1.248a153.394,153.394,0,0,1,5.5,40.768c0,84.68-68.121,153.326-152.144,153.33C252.124,3654.365,250.23,3654.33,248.322,3654.26Z" transform="translate(238.382 -3347.7)" fill="#f1f1f1"/>
</svg>
<svg   className="dmsback2" xmlns="http://www.w3.org/2000/svg" width="288.721" height="306.664" viewBox="0 0 288.721 306.664">
  <path id="Op_component_2" data-name="Op component 2" d="M1418.4,3887.214q41.961,44.664,41.94,109.867,0,65.2-41.94,109.257-41.917,44.082-101.821,44.076-61.105,0-103.022-44.674-41.939-43.479-41.938-108.659,0-65.217,41.938-109.269t103.022-44.062Q1376.481,3843.75,1418.4,3887.214Z" transform="translate(-1171.618 -3843.75)" fill="#f1f1f1"/>
</svg>

                
              </div>




              <div className=' DMServicescontent'>

<h2  >Our Digital
                      <br/>
                      Marketing Services
                  </h2>
                  <h4>Now let’s talk business.</h4>
                  <p>As a holistic internet marketing company, we offer a wide range of digital marketing solutions to help you achieve
                      your marketing goals. From taking care of your digital presence, running successful Google campaigns, offering best SEO services to amping your current content marketing, we do it all and more. </p>
</div>



            <div className='row justify-content-between' style={{marginTop:"100px"}}>

            <div className='col-md-4' style={{ paddingBottom:"70px"}} >


<div className='col' style={{marginBottom:"100px"}}>

<div className="d-flex "  >
<div>
<h3 className='text-end' >Social Media Marketing</h3>
<p className='text-end'>We develop a holistic social media
plan for your business across all
social platforms and make your
voice heard in the digital crowd.</p>
</div>
<div> <img src={DMSicon1}  style={{marginLeft:"30px"}}/></div>
</div>

</div>

<div className='col'>

<div className="d-flex " >
<div>
<h3 className='text-end' >SEO Services</h3>
<p className='text-end'>Better SEO means you have to
spend less on SEM. This is the
SEO philosophy embedded in
our efforts.</p>
</div>
<div> <img src={DMSicon3} style={{marginLeft:"30px"}} /></div>
</div>

</div>
</div>


<div className='col-md-4' >


    <div className='col' style={{marginBottom:"100px"}} >

    <div className="d-flex " >
    <div> <img src={DMSicon2} style={{marginRight:"30px"}} /></div>
<div>
<h3 className='text-left'>Google Paid Ads</h3>
<p className='text-left' >We are Google ads certified and have
the expertise to run successful paid advertising campaigns on Google to bring your target results.</p>
</div>

</div>

    </div>

    <div className='col'  >

<div className="d-flex "  >
<div> <img src={DMSicon4} style={{marginRight:"30px"}} /></div>
<div>
<h3  className='text-left'>Content Marketing
</h3>
<p className='text-left' >We provide content that is
strictly based on user intent. As
part of content marketing strategy our team writes, edits, develops and promotes content that is search engine friendly.</p>
</div>


</div>

</div>
</div>



            </div>

</div>

    )
}

export default DMServices

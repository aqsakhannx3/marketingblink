import React from 'react'

import superblink from "../../images/super-blink-label.png"

import plans from "../../images/plans_hi_res.png"

const Affordable = () => {
    return (
<section className="affordable">
	<div className="ap-patteren-1"></div>
	<div className="ap-patteren-2"></div>
  <div className="container"   >
    <div className="Affordableheading">
      <h3>Affordable Plans</h3>
      <p>We offer affordable digital marketing plans that don’t burn holes in your pocket.</p>
    </div>
    <div className="Affordabletabs">
      <ul  className="align-items-center justify-content-evenly nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-smm-tab" data-bs-toggle="pill" data-bs-target="#pills-smm" type="button" role="tab" aria-controls="pills-smm" aria-selected="true">SMM</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-seo-tab" data-bs-toggle="pill" data-bs-target="#pills-seo" type="button" role="tab" aria-controls="pills-seo" aria-selected="false">SEO</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-superblink-tab" data-bs-toggle="pill" data-bs-target="#pills-superblink" type="button" role="tab" aria-controls="pills-superblink" aria-selected="false">Super Blink</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-sem-tab" data-bs-toggle="pill" data-bs-target="#pills-sem" type="button" role="tab" aria-controls="pills-sem" aria-selected="false">SEM</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-content-tab" data-bs-toggle="pill" data-bs-target="#pills-content" type="button" role="tab" aria-controls="pills-content" aria-selected="false">CONTENT</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
		  <div className="tab-content-patteren-1"></div>
		  <div className="tab-content-patteren-2"></div>
        <div className="tab-pane fade active show" id="pills-smm" role="tabpanel" aria-labelledby="pills-smm-tab"> 
          
          {/* <!-- superblink -->
           */}
          <div className="SuperBlink">
            <div className="row  SuperBlinkrow justify-content-around "  >
              <div className="col-md-4 affordablecontentbox">
				 <div className="desktop-hide full-block"> 
					 <img width="345" src={superblink} className="w-100 blink-label"  />
				 </div>
                <p>1 Social Media Services</p>
                <ul>
                  <li>20/Month Unique Social Media </li>
                  <li>Content Posting</li>
                  <li>Competitor Analysis </li>
                  <li>Community Management</li>
                  <li>Page Moderation</li>
                  <li>Social Media Strategy </li>
                  <li>Page Monitoring & Responding</li>
                  <li>Social Media Analysis & Performance Report </li>
                  <li>Page Optimization </li>
                  <li>Social Media Marketing Plan </li>
                  <li>Progress Reporting </li>
                  <li>Post Design Scheduled </li>
                  <li>Profile Keyword Optimization - 6 Keywords </li>
                  <li>4 Platforms</li>
                  <li>Facebook Shop Creation</li>
                  <li>Lead Form Creation</li>
                  <li>Likes, Followers, Subscribers - 200 Likes 	on 2 platforms</li>
                  <li>Facebook Ad Campaign Optimization</li>
                  <li>Facebook Ads A/B Testing </li>
                  <li> Social Media Listening</li>
                  <li>Facebook Ad Campaigns </li>
                  <li>Tracking Setup </li>
                  <li> Marketing Budget Coupon - $100 </li>
                </ul>
                <p>Content Marketing Services</p>
                <ul>
                  <li>10 Blogs or 75 Product Descriptions</li>
                  <li>250 Words Per Blog Post</li>
                  <li>Unlimited Revisions Included</li>
                  <li>SEO Friendly Content</li>
                  <li>SEO Pack Included</li>
                  <li>100% Plagiarism Checked</li>
                  <li>100% Satisfaction Guaranteed </li>
                  <li>150 Word Descriptions </li>
                  <li>Turnaround Time – Within 3 Weeks </li>
                  <li>SEO Friendly Content </li>
                  <li>100% Plagiarism Checked </li>
                  <li>100% Satisfaction Guaranteed</li>
                </ul>
              </div>
              <div className="col-md-4 affordablecontentbox">
                <p>SEO Services</p>
                <ul>
                  <li>15 Focused Keywords</li>
                  <li>Onsite Optimization </li>
                  <li> Complete Website Content Optimization </li>
                  <li> 2/Month <span>(800 word count)</span> On Page Blog </li>
                  <li>Meta Tags </li>
                  <li>2/Month <span>(500 word count)</span> Off page blogs </li>
                  <li>Total 15 Business listing</li>
                  <li>2 Web 2.0 </li>
                  <li>2 Infographics </li>
                  <li>2 Guest Posting </li>
                  <li>Google Analytics </li>
                  <li>GMB </li>
                </ul>
                <p>PPC Services</p>
                <ul>
                  <li>Up to 10,000 keywords targeted </li>
                  <li>Google Ads & Bing Networks, plus Google Shopping </li>
                  <li>Up to 2 personal consultations </li>
                  <li>Fraud activity monitoring </li>
                  <li>Rule-based bidding management </li>
                  <li>PPC account settings monitoring <span> (Ex.Geotargeting)</span> </li>
                  <li>Single account representative</li>
                  <li>Up to two personal consultations per month</li>
                  <li>Up to 100 web lead phone calls tracked per month </li>
                  <li>Up to 25 web lead phone calls transcribed	per month </li>
                  <li>Monitoring clicks, conversions and click fraud activity </li>
                  <li>Setup and management of rule based bidding </li>
                  <li> International PPC campaign management <span>(English only campaigns)</span> </li>
                  <li>Setup of 1 Unbounce Landing Page template <span>(optional)</span> </li>
                  <li>Website conversion analysis reporting </li>
                </ul>
              </div>
              <div className="col-md-4 packagingcol">
				  <div className="mobile-hide">
				  	<img src={superblink} className="w-100 blink-label"  />
				  </div>
				  
                <div className="SuperblinkBtn d-flex flex-column align-items-center justify-content-center">
                  <button  className=" SuperblinkBtn1 btn " >000-123-456</button>
                  <button className=" SuperblinkBtn2  btn  " >LIVE CHAT</button>
                  <button className="SuperblinkBtn3 btn ">START PROJECT NOW</button>
                </div>
                <div className="bottom-img"> <img width="345" src={plans} className="svgman"/> </div>
              </div>
            </div>
          </div>
          {/* <!-- superblinkend -->  */}
        </div>
        <div className="tab-pane fade" id="pills-seo" role="tabpanel" aria-labelledby="pills-seo-tab"> 
          
          {/* <!-- superblink --> */}
          <div className="SuperBlink">
            <div className="row    SuperBlinkrow justify-content-around "  >
              <div className="col-md-4 affordablecontentbox">
				 <div className="desktop-hide full-block"> 
					 <img width="345" src={superblink} className="w-100 blink-label"  />
				 </div>
                <p>1 Social Media Services</p>
                <ul>
                  <li>20/Month Unique Social Media </li>
                  <li>Content Posting</li>
                  <li>Competitor Analysis </li>
                  <li>Community Management</li>
                  <li>Page Moderation</li>
                  <li>Social Media Strategy </li>
                  <li>Page Monitoring & Responding</li>
                  <li>Social Media Analysis & Performance Report </li>
                  <li>Page Optimization </li>
                  <li>Social Media Marketing Plan </li>
                  <li>Progress Reporting </li>
                  <li>Post Design Scheduled </li>
                  <li>Profile Keyword Optimization - 6 Keywords </li>
                  <li>4 Platforms</li>
                  <li>Facebook Shop Creation</li>
                  <li>Lead Form Creation</li>
                  <li>Likes, Followers, Subscribers - 200 Likes 	on 2 platforms</li>
                  <li>Facebook Ad Campaign Optimization</li>
                  <li>Facebook Ads A/B Testing </li>
                  <li> Social Media Listening</li>
                  <li>Facebook Ad Campaigns </li>
                  <li>Tracking Setup </li>
                  <li> Marketing Budget Coupon - $100 </li>
                </ul>
                <p>Content Marketing Services</p>
                <ul>
                  <li>10 Blogs or 75 Product Descriptions</li>
                  <li>250 Words Per Blog Post</li>
                  <li>Unlimited Revisions Included</li>
                  <li>SEO Friendly Content</li>
                  <li>SEO Pack Included</li>
                  <li>100% Plagiarism Checked</li>
                  <li>100% Satisfaction Guaranteed </li>
                  <li>150 Word Descriptions </li>
                  <li>Turnaround Time – Within 3 Weeks </li>
                  <li>SEO Friendly Content </li>
                  <li>100% Plagiarism Checked </li>
                  <li>100% Satisfaction Guaranteed</li>
                </ul>
              </div>
              <div className="col-md-4 affordablecontentbox">
                <p>SEO Services</p>
                <ul>
                  <li>15 Focused Keywords</li>
                  <li>Onsite Optimization </li>
                  <li> Complete Website Content Optimization </li>
                  <li> 2/Month <span>(800 word count)</span> On Page Blog </li>
                  <li>Meta Tags </li>
                  <li>2/Month <span>(500 word count)</span> Off page blogs </li>
                  <li>Total 15 Business listing</li>
                  <li>2 Web 2.0 </li>
                  <li>2 Infographics </li>
                  <li>2 Guest Posting </li>
                  <li>Google Analytics </li>
                  <li>GMB </li>
                </ul>
                <p>PPC Services</p>
                <ul>
                  <li>Up to 10,000 keywords targeted </li>
                  <li>Google Ads & Bing Networks, plus Google Shopping </li>
                  <li>Up to 2 personal consultations </li>
                  <li>Fraud activity monitoring </li>
                  <li>Rule-based bidding management </li>
                  <li>PPC account settings monitoring <span> (Ex.Geotargeting)</span> </li>
                  <li>Single account representative</li>
                  <li>Up to two personal consultations per month</li>
                  <li>Up to 100 web lead phone calls tracked per month </li>
                  <li>Up to 25 web lead phone calls transcribed	per month </li>
                  <li>Monitoring clicks, conversions and click fraud activity </li>
                  <li>Setup and management of rule based bidding </li>
                  <li> International PPC campaign management <span>(English only campaigns)</span> </li>
                  <li>Setup of 1 Unbounce Landing Page template <span>(optional)</span> </li>
                  <li>Website conversion analysis reporting </li>
                </ul>
              </div>
              <div className="col-md-4 packagingcol">
				  <div className="mobile-hide">
				  	<img src={superblink} className="w-100 blink-label"  />
				  </div>
				  
                <div className="SuperblinkBtn d-flex flex-column align-items-center justify-content-center">
                  <button  className=" SuperblinkBtn1 btn " >000-123-456</button>
                  <button className=" SuperblinkBtn2  btn  " >LIVE CHAT</button>
                  <button className="SuperblinkBtn3 btn ">START PROJECT NOW</button>
                </div>
                <div className="bottom-img"> <img width="345" src={plans} className="svgman"/> </div>
              </div>
            </div>
          </div>
         
          {/* <!-- superblinkend -->  */}
        </div>
        <div className="tab-pane fade" id="pills-superblink" role="tabpanel" aria-labelledby="pills-superblink-tab"> 
          
          {/* <!-- superblink --> */}
          
          <div className="SuperBlink">
            <div className="row    SuperBlinkrow justify-content-around "  >
              <div className="col-md-4 affordablecontentbox">
				 <div className="desktop-hide full-block"> 
					 <img width="345" src={superblink} className="w-100 blink-label"  />
				 </div>
                <p>1 Social Media Services</p>
                <ul>
                  <li>20/Month Unique Social Media </li>
                  <li>Content Posting</li>
                  <li>Competitor Analysis </li>
                  <li>Community Management</li>
                  <li>Page Moderation</li>
                  <li>Social Media Strategy </li>
                  <li>Page Monitoring & Responding</li>
                  <li>Social Media Analysis & Performance Report </li>
                  <li>Page Optimization </li>
                  <li>Social Media Marketing Plan </li>
                  <li>Progress Reporting </li>
                  <li>Post Design Scheduled </li>
                  <li>Profile Keyword Optimization - 6 Keywords </li>
                  <li>4 Platforms</li>
                  <li>Facebook Shop Creation</li>
                  <li>Lead Form Creation</li>
                  <li>Likes, Followers, Subscribers - 200 Likes 	on 2 platforms</li>
                  <li>Facebook Ad Campaign Optimization</li>
                  <li>Facebook Ads A/B Testing </li>
                  <li> Social Media Listening</li>
                  <li>Facebook Ad Campaigns </li>
                  <li>Tracking Setup </li>
                  <li> Marketing Budget Coupon - $100 </li>
                </ul>
                <p>Content Marketing Services</p>
                <ul>
                  <li>10 Blogs or 75 Product Descriptions</li>
                  <li>250 Words Per Blog Post</li>
                  <li>Unlimited Revisions Included</li>
                  <li>SEO Friendly Content</li>
                  <li>SEO Pack Included</li>
                  <li>100% Plagiarism Checked</li>
                  <li>100% Satisfaction Guaranteed </li>
                  <li>150 Word Descriptions </li>
                  <li>Turnaround Time – Within 3 Weeks </li>
                  <li>SEO Friendly Content </li>
                  <li>100% Plagiarism Checked </li>
                  <li>100% Satisfaction Guaranteed</li>
                </ul>
              </div>
              <div className="col-md-4 affordablecontentbox">
                <p>SEO Services</p>
                <ul>
                  <li>15 Focused Keywords</li>
                  <li>Onsite Optimization </li>
                  <li> Complete Website Content Optimization </li>
                  <li> 2/Month <span>(800 word count)</span> On Page Blog </li>
                  <li>Meta Tags </li>
                  <li>2/Month <span>(500 word count)</span> Off page blogs </li>
                  <li>Total 15 Business listing</li>
                  <li>2 Web 2.0 </li>
                  <li>2 Infographics </li>
                  <li>2 Guest Posting </li>
                  <li>Google Analytics </li>
                  <li>GMB </li>
                </ul>
                <p>PPC Services</p>
                <ul>
                  <li>Up to 10,000 keywords targeted </li>
                  <li>Google Ads & Bing Networks, plus Google Shopping </li>
                  <li>Up to 2 personal consultations </li>
                  <li>Fraud activity monitoring </li>
                  <li>Rule-based bidding management </li>
                  <li>PPC account settings monitoring <span> (Ex.Geotargeting)</span> </li>
                  <li>Single account representative</li>
                  <li>Up to two personal consultations per month</li>
                  <li>Up to 100 web lead phone calls tracked per month </li>
                  <li>Up to 25 web lead phone calls transcribed	per month </li>
                  <li>Monitoring clicks, conversions and click fraud activity </li>
                  <li>Setup and management of rule based bidding </li>
                  <li> International PPC campaign management <span>(English only campaigns)</span> </li>
                  <li>Setup of 1 Unbounce Landing Page template <span>(optional)</span> </li>
                  <li>Website conversion analysis reporting </li>
                </ul>
              </div>
              <div className="col-md-4 packagingcol">
				  <div className="mobile-hide">
				  	<img src={superblink} className="w-100 blink-label"  />
				  </div>
				  
                <div className="SuperblinkBtn d-flex flex-column align-items-center justify-content-center">
                  <button  className=" SuperblinkBtn1 btn " >000-123-456</button>
                  <button className=" SuperblinkBtn2  btn  " >LIVE CHAT</button>
                  <button className="SuperblinkBtn3 btn ">START PROJECT NOW</button>
                </div>
                <div className="bottom-img"> <img width="345" src={plans} className="svgman"/> </div>
              </div>
            </div>
          </div>
          {/* <!-- superblinkend -->  */}
        </div>
      </div>
    </div>
  </div>
</section>
     
    )
}

export default Affordable
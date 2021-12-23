import React from 'react'
import art2 from "../../images/art2.webp"

import superman from "../../images/seostrategy-superman.png"
import search from "../../images/search.png"

const SeoStretagy = () => {
    return (



               
<section class=" container-fluid  SeoStrategy" >
	<div class="particles_9 gt3_rotated_element">
			  <img src={art2} alt="" width="41" height="53" />
	</div>
	
	<div class="patteren-1"></div>
  <div class="row ">
    <div class="col-md-6  SeoStrategyleft" data-aos="fade-right" data-aos-duration="800">
      <img   src={superman}/>
    </div>
    <div class="col-md-6  SeoStrategyright" >
      <div class="row lead-box">
		  <div class="col-md-12 SeoStrategycontent" style={{marginTop:"100px"}}>
			<h4>Comprehensive SEO Strategy</h4>
			<h3> Get Qualified Organic Leads </h3>
			<p > <span class="marketingblink">Marketing Blink </span>can help you boost your end result with an SEO strategy tailored to your brand thanks to our SEO experts. With our search engine optimization services, you can start attracting more quality search traffic to your website right away. Get qualified organic leads on Keywords that matter the most to your business. </p>
		  </div>
		  
		  	<div class="row tabsection">
		<div class="col-md-5 ">
				<div     class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">On-Page SEO</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Off-Page SEO</button>
          <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">SEO Gap Analysis</button>
          <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Keyword Research</button>
        </div></div>
		<div class="col-md-7 tab-box"><div  class="tab-content " id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div  class="card"  > <img src={search}  style={{width:"39px", height:"39px"}} />
              <p > We evaluate the performance of your website in terms of SEO, speed, competitiveness, and traffic.</p>
            </div>
          </div>
          <div  class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div  class="card"  > <img src={search}  style={{width:"39px", height:"39px"}} />
              <p > From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <div  class="card"  > <img src={search}  style={{width:"39px", height:"39px"}} />
              <p > In order to stay ahead of the SEO curve we perform a thorough analysis of rivals.</p>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
            <div  class="card"  > <img src={search}  style={{width:"39px", height:"39px"}} />
              <p > Our keyword research is thorough and focuses on "conversion keywords" that generate leads, which is the most crucial stage in SEO.</p>
            </div>
          </div>
        </div></div>
      
	</div>
		  
		  
		  
	  </div>
    <button class="btn  SeoStrategybtn" >Request Free SEO Audit</button>
		</div>
	
		
 
		
	
      
	
  </div>
</section>

            

     )
}

export default SeoStretagy

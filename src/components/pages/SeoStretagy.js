import React from 'react'
import art2 from "../../images/art2.webp"

import superman from "../../images/seostrategy-superman.png"
import search from "../../images/search.png"

const SeoStretagy = () => {
    return (



               

      <section className=" container-fluid  SeoStrategy" >
      <div className="particles_9 gt3_rotated_element">
            <img src={art2} alt="" width="41" height="53" />
      </div>
      
      <div className="patteren-1"></div>
      <div className="row ">
        <div className="col-md-6  SeoStrategyleft" data-aos="fade-right" data-aos-duration="800">
          <img   src={superman} />
        </div>
        <div className="col-md-6  SeoStrategyright" >
          <div className="row lead-box">
          <div className="col-md-12 SeoStrategycontent" style={{marginTop:"100px"}}>
          <h4>Comprehensive SEO Strategy</h4>
          <h3> Get Qualified Organic Leads </h3>
          <p > <span className="marketingblink">Marketing Blink </span>can help you boost your end result with an SEO strategy tailored to your brand thanks to our SEO experts. With our search engine optimization services, you can start attracting more quality search traffic to your website right away. Get qualified organic leads on Keywords that matter the most to your business. </p>
          </div>
          
            <div className="row tabsection">
        <div className="col-md-5 ">
            <div     className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">On-Page SEO</button>
              <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Off-Page SEO</button>
              <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">SEO Gap Analysis</button>
              <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Keyword Research</button>
            </div></div>
        <div className="col-md-7 tab-box"><div  className="tab-content " id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <div  className="card"  > <img src={search} style={{width:"39px",height:"39px"}} />
                  <p > 1From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
                </div>
              </div>
              <div  className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div  className="card"  > <img src={search} style={{width:"39px",height:"39px"}} />
                  <p > 2From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <div  className="card"  > <img src={search} style={{width:"39px",height:"39px"}} />
                  <p > 3From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <div  className="card"  > <img src={search} style={{width:"39px",height:"39px"}}/>
                  <p > 4From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
                </div>
              </div>
            </div>
          
            </div>
          
      </div>
   
          
        </div>
        <button className="btn  SeoStrategybtn" >Request Free SEO Audit</button>
     
        </div>
      
       
        
      
          
      
      </div>
    </section>

            

     )
}

export default SeoStretagy

import React from 'react'
import superman from "../images/superman1.jpg"
import search from "../images/search.png"
import SeoStrategyimg from "../images/SeoStrategyimg.jpg"


const SeoStretagy = () => {
    return (
           <div className=" container-fluid SeoStrategy" >


                 <div className='container'>


                   
<div className="row ">

    <div className="col-md-6 SeoStrategyleft" >

    <div className='SeoStrategyleftimg'>
   <img src={superman}    /> 
    </div>
   
    </div>
   <div className="col-md-6  SeoStrategyright">

 <div className="SeoStrategyimg">

               <img src={SeoStrategyimg} className="seoimg"/>
              
             </div>
       <h4>Comprehensive SEO Strategy</h4>
       <h3>
      
         Get Qualified Organic Leads
         
         </h3>
       <p >

       <span className="marketingblink">Marketing Blink </span>can help you boost your end result with an SEO strategy tailored to your brand thanks to our SEO experts. With our search engine optimization services, you can start attracting more quality search traffic to your website right away. Get qualified organic leads on Keywords that matter the most to your business.
       </p>

        {/* tabssection
      */}

<div className="row d-flex align-items-start align-items-center SeoStrategytabs ">
<div style={{backgroundColor:"#fff" , boxShadow:"0 0 60px #EFF2F5",borderRadius:"24px"}} className="col nav flex-column    nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">

<button  className="nav-link active text-start " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">On-Page SEO</button>
<button className="nav-link text-start  " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Off-Page SEO</button>
<button className="nav-link text-start " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">SEO Gap Analysis</button>
<button className="nav-link text-start " id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Keyword Research
</button>
</div>
<div style={{backgroundColor:"#fff" ,boxShadow:"0 0 60px #EFF2F5" , borderRadius:"24px"}} className="col  tabContent tab-content " id="v-pills-tabContent" >
{/* On-Page SEO */}

<div className="  tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

  <div className="card tabcard " >

    <div className="card-body">
    <img src={search} style={{width:"40px",height:"40px"}} />
    <p className="card-text">
  
    
     From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
    </div>
  </div>

 
</div>
{/* On-Page SEO end */}
<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

<div className="card tabcard " >

<div className="card-body">
<img src={search} style={{width:"40px",height:"40px"}} />
<p className="card-text">


From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
</div>
</div>

</div>

<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

<div className="card tabcard " >

<div className="card-body">
<img src={search} style={{width:"40px",height:"40px"}} />
<p className="card-text">


From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
</div>
</div>

</div>
<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">


<div className="card tabcard " >

<div className="card-body">
<img src={search} style={{width:"40px",height:"40px"}} />
<p className="card-text">


From link building to thorough backlink audit we provide off page services that help you ace the search engine rankings and enhance your domain authority.</p>
</div>
</div>


</div>

</div>

</div>

        
<button className="btn  SeoStrategybtn" >Request Free SEO Audit</button>
       
       
        </div>
      
</div>
                 </div>





  

</div>
            

     )
}

export default SeoStretagy

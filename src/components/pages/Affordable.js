import React from 'react'
import SuperBlink from './AffordableTabs/SuperBlink'
import affordableimg3 from "../images/affordableimg3.jpg"
import affordableimg4 from "../images/affordableimg4.jpg"
import affordableimg5 from "../images/affordableimg5.jpg"
import affordableimg6 from "../images/affordableimg6.png"



const Affordable = () => {
    return (
         <div className="container-fluid  affordable" >
       <div className=" container"  >
          
         
                 
            <div className="row affordablerow" >


              <div className="d-flex affordablebtn align-items-center justify-content-center">

                      <button type="button" className="btn btn-blinked  me-3 ">Get Blinked</button> 
                     
                      <button type="button" className="btn btnplans ">View Plans</button>
                 
                  </div> 

                <div className="col-md-12 text-center Affordableheading">


                    <h3>Affordable Plans</h3>
                    <p>We offer affordable digital marketing plans that don’t burn holes in your pocket.</p>
                </div>


                <div className="row Affordabletabs" >
                <div className="affordablepart1">

                    
<img src={affordableimg3} className="affordableimg3" />
<img src={affordableimg4} className="affordableimg4" />
<img src={affordableimg5} className="affordableimg5" />
<img src={affordableimg6} className="affordableimg6" />
      </div>

                <ul class="align-items-center justify-content-evenly nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-smm-tab" data-bs-toggle="pill" data-bs-target="#pills-smm" type="button" role="tab" aria-controls="pills-home" aria-selected="true">SMM</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-seo-tab" data-bs-toggle="pill" data-bs-target="#pills-seo" type="button" role="tab" aria-controls="pills-seo" aria-selected="false">SEO</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-superblink-tab" data-bs-toggle="pill" data-bs-target="#pills-superblink" type="button" role="tab" aria-controls="pills-superblink" aria-selected="false">Super Blink</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-sem-tab" data-bs-toggle="pill" data-bs-target="#pills-sem" type="button" role="tab" aria-controls="pills-sem" aria-selected="false">SEM</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-content-tab" data-bs-toggle="pill" data-bs-target="#pills-content" type="button" role="tab" aria-controls="pills-content" aria-selected="false">CONTENT</button>
  </li>
</ul>



<div className=" align-items-center  justify-content-center affordablecontent tab-content " id="pills-tabContent">
  <div  class="tab-pane fade show active" id="pills-smm" role="tabpanel" aria-labelledby="pills-smm-tab">
  <SuperBlink/>
  </div>
  <div class="tab-pane fade" id="pills-seo" role="tabpanel" aria-labelledby="pills-seo-tab">
               <div className='container'>
                   <div className='row align-items-center justify-content-center'>
                   <SuperBlink/>
                   </div>
               </div>
  </div>
  <div class="tab-pane fade" id="pills-superblink" role="tabpanel" aria-labelledby="pills-superblink-tab">
        <SuperBlink/>
  </div>
  <div class="tab-pane fade" id="pills-sem" role="tabpanel" aria-labelledby="pills-sem-tab">
  <p>
  <SuperBlink/>
</p>
  </div>
  <div class="tab-pane fade" id="pills-content" role="tabpanel" aria-labelledby="pills-content-tab">
  <p>
  <SuperBlink/>
</p>
  </div>
</div>
                </div>

                
                   </div>
               
                

        </div>
       </div>
     
    )
}

export default Affordable
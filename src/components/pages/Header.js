import React from 'react'
import bannergirl from "../images/bannergirl1.jpg"
const Header = () => {
    return (
        <div className="container-fluid Header" >


         <div className="container">
         <div className="row">

<div className="col-md-6 headerleft" >
<img src={bannergirl} className="w-100 h-100"/>


</div>
<div className="col-md-6  headerright">

    <h2>
        Digital

        Marketing

        Services</h2>

        <p>
        Your mere social media presence isn’t all it takes to
        up your social media game. Your Social Media
        footprint. Reach new heights with digital marketing
        services by <span className="marketingblink">Marketing Blink</span>


    </p>
    <div className="row HeaderInput" >

        <div className="col">
        <input type="text" class="form-control" placeholder="Full Name" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        <input type="text" class="form-control" placeholder="Phone " aria-label="Example text with button addon" aria-describedby="button-addon1"/>
      
        
        
        
        
        </div>
        <div className="col">
        <input type="email" class="form-control" placeholder="Email" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        <div className="dropdown show  dropdowninput  " >
  <a  className="btn  dropdown-toggle   " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
SocialMedia
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
    <a className="dropdown-item" href="#">facebook</a>
    <a className="dropdown-item" href="#">Instagram</a>
    <a className="dropdown-item" href="#">Twitter</a>
  </div>
</div>


        
        
        
        
        </div>
    
    
    </div>

          <div  className="Headerbtn d-flex">
          <button className="btn btnrequest">REQUEST A CALL BACK</button>
          <button className="btn btnlive">LIVE CHAT</button>
          {/* <input  style={{width:"240px",height:"50px",padding:"10px"}} type="button" class="btn" value="REQUEST A CALL BACK" />
          <input style={{width:"240px",height:"50px"}} type="button" class="btn" value="REQUEST A CALL BACK" /> */}
          </div>
</div>

</div>
</div>


         </div>
     
    )
}

export default Header

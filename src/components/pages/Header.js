import React from 'react'
import bannergirl from "../images/bannergirl2.jpg"
import"../style/Header.css"
const Header = () => {
    return (
        <section className="  Header"  >


         <div className="container">
         <div className="row">

<div className="col-md-6 headerleft"  >
<img src={bannergirl} />


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
    


          <div className='row HeaderInput'>

         <div className='col-md-6'>
         <input type="text" class="form-control" placeholder="Full Name" />
         </div>
         <div className='col-md-6'>
         <input type="text" class="form-control" placeholder="Email" />
         </div>
         <div className='col-md-6'>
         <input type="text" class="form-control" placeholder="Phone" />
         </div>
         <div className='col-md-6'>
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
         <div className='col-md-6'>
        <button className='btn  btnrequest'>REQUEST A CALL BACK</button>
         </div>
         <div className='col-md-6'>
         <button className='btn  btnlive'>LIVE CHAT</button>
         </div>
          </div>



    {/* <div className="row HeaderInput" >

        <div className="col-md-6">
        <input type="text" class="form-control" placeholder="Full Name" />
        <input type="text" class="form-control" placeholder="Phone " />
      
        <input type="button" class="form-control" value="hello"/>
      
        
        
        
        </div>
        <div className="col-md-6">
          
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

<input type="button" class="form-control" value="hello"/>
        
        
        
        
        </div>
    
    
    </div> */}

          {/* <div  className="Headerbtn d-flex">
          <button className="btn btnrequest">REQUEST A CALL BACK</button>
          <button className="btn btnlive">LIVE CHAT</button>
       
          </div> */}
</div>

</div>
</div>


         </section>
     
    )
}

export default Header

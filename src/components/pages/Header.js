import React from 'react'
import bannergirl from "../images/bannergirl2.jpg"

const Header = () => {
    return (
        <section className=" Header"   >


         <div className="container">
         <div className="row">

<div className=" col-md-6  headerleft"  >

 <div className='headerimg'>
 <img src={bannergirl} />
 </div>

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

         <div className='col-md-6 '>
         <input type="text" class="form -control" placeholder="Full Name" />
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




</div>

</div>
</div>


         </section>
     
    )
}

export default Header

import React from 'react'
import logo from "../images/logo.jpg"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <section className="navbarsection"  >
          <div className="container"  >
        <nav className=" navbar navbar-expand-lg navbar-light vg-white "  >
        
          
                  <Link to="/"   >
                  <img src={logo} alt="logo" className='logo' />
                  </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
      


           <ul className="navbar-nav ms-3 me-3  mb-lg-0"  >
              <li className="nav-item" >
             
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plans" > Plans</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/socialmedia">Social Media Marketing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/seoservices" >SEO Services  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/paidmarketing" >   Paid Marketing  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contentmarketing" >  Content Marketing  </Link>
              </li>
            
            </ul>
            <button className="btn navbarbtn btn-success" >Let's Connect</button>
           </div>
        
            
             
           
          
       
      
      </nav>
      </div>
      </section>
    )
}

export default Navbar
